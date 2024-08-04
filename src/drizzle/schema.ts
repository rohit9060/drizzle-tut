import { pgTable, text, boolean } from "drizzle-orm/pg-core";

export const User = pgTable("users", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  password: text("password").notNull(),
  isVerified: boolean("is_verified").default(false),

  token: text("token"),
  otp: text("otp"),
});

export const Post = pgTable("posts", {
  id: text("id").notNull().primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
});
