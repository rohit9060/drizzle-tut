import type { Config } from "drizzle-kit";
import "dotenv/config";

const config: Config = {
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
};

export default config;
