import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { secret } from "./config";
import * as Schema from "./drizzle/schema";

//! db query client
const dbQueryClient = postgres(secret.DATABASE_URL, {
  max: 1,
});

export const db = drizzle(dbQueryClient, {
  schema: Schema,
});
