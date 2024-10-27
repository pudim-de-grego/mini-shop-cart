import { fn } from "@storybook/test";

import { AddToCartButton } from "./AddToCartButton";

export default {
  title: "Componentes/Botão de Adicionar ao Carrinho",
  component: AddToCartButton,
  args: { onClick: fn() },
  tags: ["autodocs"],
};

export const Basico = {
  title: "Básico",
  args: {
    productState: "NOT_IN_CART",
  },
};

export const NoCarrinho = {
  title: "No Carrinho",
  args: {
    productState: "ALREADY_IN_CART",
  },
};

export const Indisponivel = {
  title: "Insdisopnível",
  args: {
    productState: "OUT_OF_STOCK",
  },
};
