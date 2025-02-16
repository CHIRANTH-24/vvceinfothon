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
export const IOT_TABLE = pgTable("iot_data", {
  userid: serial().primaryKey(),
  name: varchar().default("Chiranth"),
  iotLayout: json(),
  status: varchar().default("IOT connection established")
});
