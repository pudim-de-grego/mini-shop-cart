import React from "react";

import PropTypes from "prop-types";

export const AddToCartButton = ({ productState, ...props }) => {
  let label = "";
  let classVariation = "";

  if (productState == "NOT_IN_CART") {
    label = "Comprar \u{1F4B5}";
    classVariation = "addToCart";
  } else if (productState == "ALREADY_IN_CART") {
    label = "Já incluso no carrinho \u{1F6D2}";
    classVariation = "alreadyInCart";
  } else if (productState == "OUT_OF_STOCK") {
    label = "Indisponível \u274C";
    classVariation = "outOfStock";
  }

  return (
    <button
      type="button"
      className={
        "storybook-button storybook-button--medium button-" + classVariation
      }
      {...props}
    >
      {label}
    </button>
  );
};

AddToCartButton.propTypes = {
  /** Estado do produto*/
  productState: PropTypes.string,
  onClick: PropTypes.func,
};

AddToCartButton.defaultProps = {
  productState: "NOT_IN_CART",
  onClick: undefined,
};
