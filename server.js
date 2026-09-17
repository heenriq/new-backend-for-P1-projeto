import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
import { calcularFrete } from "./src/frete.js";

app.get("/", (req, res) => {
  res.send("Frete Service Byte & Bun online");
});

app.post("/frete", (req, res) => {
  const valorPedido = req.body.valor;
  const resultado = calcularFrete(valorPedido);

  res.json({ tipo: `${resultado.tipo}`, result: resultado.valorFinal });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Frete Service Rodando em http://localhost:${PORT}`);
});
