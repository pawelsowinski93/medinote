import { OpenAPIHono } from "@hono/zod-openapi";
import testController from "../modules/test/test.controller";
import { handle } from "hono/vercel";

const app = new OpenAPIHono();

// routes
app.route("/", testController);

const handler = handle(app);

export const GET = handler;
