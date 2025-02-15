import { drizzle } from "drizzle-orm/neon-http";

const db = drizzle(
  "postgresql://neondb_owner:npg_Rk2WuQV9nbqN@ep-floral-fog-a1u6gm2o-pooler.ap-southeast-1.aws.neon.tech/aquatech?sslmode=require"
);

export default db;
