import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.HPOSTGRES_HOST,
    port: process.env.HPOSTGRES_PORT,
    user: process.env.HPOSTGRES_USER,
    password: process.env.HPOSTGRES_PASSWORD,
    database: process.env.HPOSTGRES_DB,
  });
  await client.connect();
  const result = await client.query(queryObject);
  client.end();

  return result;
}

export default { query: query };
