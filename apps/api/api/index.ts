import { OpenAPIHono } from "@hono/zod-openapi";
import testController from "../modules/test/test.controller";
import { handle } from "hono/vercel";

const app = new OpenAPIHono();

// routes
app.route("/", testController);
app.get("/", (c) => c.json({ message: "Hello World" }));

const handler = handle(app);

export const GET = handler;
