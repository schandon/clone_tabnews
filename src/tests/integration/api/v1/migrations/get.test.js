import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch(
    "https://clone-tabnews-fey697x2f-alexandre-pereiras-projects-78a90f7e.vercel.app//api/v1/migrations"
  );

  expect(response.status).toBe(200);
  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});
