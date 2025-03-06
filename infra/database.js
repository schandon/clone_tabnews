import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config("./.env");

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    ssl: process.env.TYPE_ENVIRONMENT === "development" ? false : true,
  });
  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result;
  } catch (err) {
    console.error("Error connecting to the database", err.stack);
  } finally {
    await client.end();
  }
}

export default { query: query };
