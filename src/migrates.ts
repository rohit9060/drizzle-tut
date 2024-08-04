import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { secret } from "./config";

//! db migration client
const client = postgres(secret.DATABASE_URL, {
  max: 1,
});

migrate(drizzle(client), {
  migrationsFolder: "./src/drizzle/migrations",
});

async function main() {
  await migrate(drizzle(client), {
    migrationsFolder: "./src/drizzle/migrations",
  });
}

main();
