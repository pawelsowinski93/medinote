import { OpenAPIHono } from "@hono/zod-openapi";
import { route } from "./test.model";
import { Context } from "hono";

const testController = new OpenAPIHono();

testController.openapi(route, (c: Context) => {
  return c.json({ message: "Nowy test" });
});

export default testController;
