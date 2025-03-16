test("GET to  /api/v1/migration should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);

  const response_body = await response.json();

  expect(Array.isArray(response_body)).toBe(true);
});
