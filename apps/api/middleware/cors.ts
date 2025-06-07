import { cors } from "hono/cors";

export const corsMiddleware = cors({
  origin: process.env.WEB_URL || "",
  credentials: true,
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
});
