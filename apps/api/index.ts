import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import type { Context } from "hono";
import testController from "./modules/test/test.controller";
import dotenv from "dotenv";
import { corsMiddleware } from "./middleware/cors";

dotenv.config();

const app = new OpenAPIHono();

// middleware
app.use("*", corsMiddleware);

// doc + swagger
app.doc("/doc", (c: Context) => ({
  openapi: "3.1.0",
  info: {
    version: "1.0.0",
    title: "API",
    description: "API for the app",
  },
  servers: [
    {
      url: new URL(c.req.url).origin,
      description: "Environment",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
      },
    },
  },
}));
app.get("/", (c) => c.redirect("/swagger"));
app.get(
  "/swagger",
  swaggerUI({
    url: "/doc",
    title: "API",
  })
);

// routes
app.route("/", testController);

export default {
  fetch: app.fetch,
  port: process.env.PORT || 3002,
};
