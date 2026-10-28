import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: [".env"] });

const connectionString = process.env.DATABASE_URL!;

export default defineConfig({
    out: "./src/lib/db/migrations",
    schema: "./src/lib/db/schema",
    dialect: "postgresql",
    dbCredentials: {
        url: connectionString,
    },
});
