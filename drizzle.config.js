import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_Rk2WuQV9nbqN@ep-floral-fog-a1u6gm2o-pooler.ap-southeast-1.aws.neon.tech/aquatech?sslmode=require",
  },
});
