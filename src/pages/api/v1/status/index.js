import database from "infra/database.js";

export default async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const versionValues = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnetions = await database.query("SHOW max_connections;");
  const maxConnectionsValues = databaseMaxConnetions.rows[0].max_connections;

  // const databaseOpenedConnectionsResult = await database.query(
  //   "SELECT * FROM pg_stat_activity"
  // );
  // console.log(databaseOpenedConnectionsResult);

  return response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: versionValues,
        max_connetions: parseInt(maxConnectionsValues),
      },
    },
  });
}
