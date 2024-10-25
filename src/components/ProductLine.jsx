import React from "react";

import PropTypes from "prop-types";

import { AddToCartButton } from "./AddToCartButton";

export const ProductLine = ({
  productName,
  alreadyInCart,
  quantityInStock,
}) => {
  let productState = "";

  if (quantityInStock == 0) {
    productState = "OUT_OF_STOCK";
  } else if (alreadyInCart) {
    productState = "ALREADY_IN_CART";
  } else {
    productState = "NOT_IN_CART";
  }
  return (
    <div className="productLine">
      <div className="productLine-topRow">
        <span style={{ display: "flex", alignItems: "center" }}>
          {productName}
        </span>
      </div>
      <div className="productLine-bottomRow">
        <span style={{ display: "flex", alignItems: "center" }}>
          Quantidade em estoque: {quantityInStock}
        </span>
        <AddToCartButton productState={productState}></AddToCartButton>
      </div>
    </div>
  );
};

AddToCartButton.propTypes = {
  /** Estado do produto*/
  alreadyInCart: PropTypes.bool,
  quantityInStock: PropTypes.number,
};

AddToCartButton.defaultProps = {
  alreadyInCart: false,
  quantityInStock: 1,
};
