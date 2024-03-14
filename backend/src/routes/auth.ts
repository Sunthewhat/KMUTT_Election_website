import { sign } from "hono/jwt";
import {
  generateCodeVerifier,
  generateState,
  OAuth2RequestError,
} from "arctic";

import { Hono } from "hono";
import { getCookie, setCookie } from "hono/cookie";

import { MicrosoftEntraId } from "arctic";

const authRoute = new Hono();

const entraId = new MicrosoftEntraId(
  Bun.env.TENANT_ID || "",
  Bun.env.MICROSOFT_CLIENT_ID || "",
  Bun.env.MICROSOFT_CLIENT_SECRET || "",
  Bun.env.REDIRECT_URI || ""
);

authRoute.get("/login/microsoft", async (c) => {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  setCookie(c, "state", state, {
    secure: true, // set to false in localhost
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10, // 10 min
  });

  setCookie(c, "code_verifier", codeVerifier, {
    secure: true, // set to false in localhost
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10, // 10 min
  });

  const url = await entraId.createAuthorizationURL(state, codeVerifier, {
    scopes: ["profile", "email"],
  });
  return c.redirect(url.toString() + `&prompt=select_account`);
});

authRoute.get("/callback/microsoft", async (c) => {
  const { state, code } = c.req.query();
  const storedState = getCookie(c, "state");
  const storedCodeVerifier = getCookie(c, "code_verifier");

  if (!code || !storedState || !storedCodeVerifier || state !== storedState) {
    throw new Error("Invalid request");
  }
  try {
    const tokens = await entraId.validateAuthorizationCode(
      code,
      storedCodeVerifier
    );
    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me?$select=onPremisesSamAccountName",
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      }
    );

    const user = await response.json();
    const encryptKey = await sign(user.onPremisesSamAccountName, "secret");

    setCookie(c, "session", encryptKey, {
      secure: false, // set to false in localhost
      httpOnly: true,
      maxAge: 24 * 60 * 60, // 10 min
      path: "/",
    });

    return c.redirect("http://localhost:8000/vote/samo");
  } catch (e) {
    if (e instanceof OAuth2RequestError) {
      // const { request, message, description } = e;
      return c.json({ message: "Unable to login" }, 500);
    }
    console.log("error \n", e);
    return c.json({ message: "Unknown error" }, 500);
  }
});

export default authRoute;
