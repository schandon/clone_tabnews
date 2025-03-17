import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}
test("POST to  /api/v1/migration should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response.status).toBe(200);

  const response_body = await response.json();
  console.log("response body", response_body);

  expect(Array.isArray(response_body)).toBe(true);
  expect(response_body[0].timestamp).toEqual(1741606460552);
  expect(response_body[0].path).toContain(
    "1741606460552_first-migrate-test.js"
  );
});
