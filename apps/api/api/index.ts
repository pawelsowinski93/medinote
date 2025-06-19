import { OpenAPIHono } from "@hono/zod-openapi";
import testController from "../modules/test/test.controller";
import { handle } from "hono/vercel";

const app = new OpenAPIHono();

// routes
app.route("/api", testController);
app.get("/api", (c) => c.json({ message: "Hello World" }));

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const HEAD = handler;
export const OPTIONS = handler;
