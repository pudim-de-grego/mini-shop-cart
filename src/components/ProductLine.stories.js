import { ProductLine } from "./ProductLine";

export default {
  title: "Linha de Produto",
  component: ProductLine,
  tags: ["autodocs"],
  args: {
    productName: "Nome do produto",
    alreadyInCart: false,
    quantityInStock: 0,
  },
  artgTypes: {
    productName: { control: "string" },
    alreadyInCart: { control: "bool" },
    quantityInStock: { control: "number" },
  },
};

export const Basica = {};
