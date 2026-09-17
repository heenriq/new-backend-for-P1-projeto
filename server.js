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
  let Frete;

  if (resultado.tipo === "frete") {
    Frete = 5;
  } else if (resultado.tipo === "descontado") {
    Frete = 2.5;
  } else {
    Frete = 0;
  }

  res.json({ valorFrete: `${Frete}`, result: resultado.valorFinal });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Frete Service Rodando em http://localhost:${PORT}`);
});
