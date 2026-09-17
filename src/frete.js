import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

const frete = 5;

export function calcularFrete(valorPedido) {
  if (isNaN(valorPedido) || valorPedido < 0) {
    return { tipo: "inválido", valorFinal: "Valor do pedido inválido." };
  } else if (valorPedido <= 7) {
    return {
      tipo: "frete",
      valorFinal: valorPedido + frete,
    };
  } else if (valorPedido > 7 && valorPedido <= 10) {
    return {
      tipo: "descontado",
      valorFinal: valorPedido + frete / 2,
    };
  } else {
    return {
      tipo: "grátis",
      valorFinal: valorPedido,
    };
  }
}

const resultado = calcularFrete(7);
console.log(resultado.tipo);
