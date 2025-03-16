import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
export default async function migration(request, response) {
  const migration = await migrationRunner({
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  });

  return response.status(200).json(migration);
}
