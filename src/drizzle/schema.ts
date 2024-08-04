import { pgTable, text, timestamp, boolean, uuid } from "drizzle-orm/pg-core";

export const User = pgTable("users", {
  id: uuid("id").notNull().primaryKey(),

  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  isActive: boolean("is_active").notNull().default(true),
});
