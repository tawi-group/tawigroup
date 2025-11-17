import { defineConfig } from "drizzle-kit";
import 'dotenv/config';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    'DATABASE_URL must be set in .env file. Ensure the database is provisioned'
  );
}

console.log("Connecting to database:", databaseUrl.replace(/:[^:@]+@/, ':****@')); // Log URL with hidden password

export default defineConfig({
  out: './migrations',
  schema: './shared/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: databaseUrl,
  },
});
