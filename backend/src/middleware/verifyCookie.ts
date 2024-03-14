import { MiddlewareHandler } from "hono";
import { getCookie } from "hono/cookie";
import { verify } from "hono/jwt";

export const verifyCookie: MiddlewareHandler = async (c, next) => {
  try {
    const cookie: string = (await getCookie(c, "session")) || "";
    await verify(cookie, "secret");
    await next();
  } catch (error) {
    return c.json({ message: "Unauthorized" }, 401);
  }
};
