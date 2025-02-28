import database from "infra/database.js";

export default async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const versionResult = await database.query("SHOW server_version;");
  const versionValues = versionResult.rows[0].server_version;

  const maxConnetions = await database.query("SHOW max_connections;");
  const maxConnectionsValues = maxConnetions.rows[0].max_connections;

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
