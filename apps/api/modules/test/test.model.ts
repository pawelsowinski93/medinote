import { createRoute } from "@hono/zod-openapi";
import { testSchema } from "@repo/schema-and-type/test/schema";

export const route = createRoute({
  method: "get",
  path: "/get-test-data",
  tags: ["test"],
  responses: {
    200: {
      content: {
        "application/json": {
          schema: testSchema,
        },
      },
      description: "Retrieve the user",
    },
  },
});
