test("GET to  /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const responesBody = await response.json();

  const parseBody = new Date(responesBody.updated_at).toISOString();
  expect(responesBody.updated_at).toEqual(parseBody);

  console.log("Aqui está nosso response Body:", responesBody);
  expect(responesBody.dependencies.database.version).toEqual("16.8");
  expect(responesBody.dependencies.database.max_connetions).toEqual(100);
  expect(responesBody.dependencies.database.opend_connections).toEqual(1);
});
