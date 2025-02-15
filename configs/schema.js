import {
  pgTable,
  serial,
  varchar,
  integer,
  text,
  date,
  float,
  boolean,
  primaryKey,
  json,
} from "drizzle-orm/pg-core";

// User Table
export const users = pgTable("users", {
    id: serial().primaryKey(),
    name: varchar().notNull(),
    email: varchar().notNull()
});
// export const RECIPE_TABLE = pgTable("recipeTable", {
//   id: serial().primaryKey(),
//   recipeId: varchar().notNull(),
//   ingridients: varchar().notNull(),
//   calories: varchar().notNull(),
//   recipeLayout: json(),
//   createdBy: varchar().notNull(),
//   status: varchar().default("Genrating"),
// });
