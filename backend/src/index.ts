import { cors } from "hono/cors";
import { Hono } from "hono";
import { logger } from "hono/logger";
import eligibleRoute from "./routes/eligible";
import candidateRoute from "./routes/candidate";
import partyRoute from "./routes/party";
import authRoute from "./routes/auth";
import electionRoute from './routes/election';

const app = new Hono();

app.use(logger());
app.use(
  cors({
    origin: Bun.env.FRONTEND_URL || "",
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
    credentials: true,
  })
);

app.get("/", async (c) => {
  return c.text("Hello Hono!");
});

app.route("/auth", authRoute);
app.route("/candidate", candidateRoute);
app.route("/eligible", eligibleRoute);
app.route("/party", partyRoute);
app.route("/election", electionRoute)

export default {
  port: 8000,
  fetch: app.fetch,
};
