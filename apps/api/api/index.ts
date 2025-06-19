import { OpenAPIHono } from "@hono/zod-openapi";
import testController from "../modules/test/test.controller";
import { handle } from "hono/vercel";
import { swaggerUI } from "@hono/swagger-ui";

const app = new OpenAPIHono();

app.doc("/api/doc", (c) => ({
  openapi: "3.1.0",
  info: {
    version: "1.0.0",
    title: "API",
  },
}));

app.get(
  "/api/swagger",
  swaggerUI({
    url: "/api/doc",
    title: "API",
  })
);

// router
app.get("/", (c) => c.redirect("/api/swagger"));
app.get("/api", (c) => c.redirect("/api/swagger"));

// routes
app.route("/api", testController);

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const HEAD = handler;
export const OPTIONS = handler;
export const honoApp = app;
