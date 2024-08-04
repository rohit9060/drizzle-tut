import dotenv from "dotenv";
dotenv.config();

const _env = {
  DATABASE_URL: process.env.DATABASE_URL || "",
};

export const secret = Object.freeze(_env);
