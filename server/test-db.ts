import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL!;
const client = postgres(connectionString);
const db = drizzle(client);

async function testConnection() {
  try {
    const result = await client`SELECT version()`;
    console.log("Successfully connected to database!");
    console.log("PostgreSQL version:", result[0].version);
  } catch (error) {
    console.error("Failed to connect to database:", error);
  } finally {
    await client.end();
  }
}

testConnection();
