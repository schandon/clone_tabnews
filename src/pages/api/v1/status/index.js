import database from "../../../../../infra/database.js";
export default function status(request, response) {
  const result = database.query("SELECT 1 + 1 as SUM;");
  console.log(result);
  return response
    .status(200)
    .json({ chave: "Alunos curso.dev são acima da média" });
}
