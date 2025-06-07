import { testSchema } from "./schema";
import { z } from "zod";

export type Test = z.infer<typeof testSchema>;

export interface ITest extends Test {}
