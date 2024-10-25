import React from "react";

import PropTypes from "prop-types";

export const AddToCartButton = ({ productState, ...props }) => {
  let label = "";

  if (productState == "NOT_IN_CART") {
    label = "Comprar \u{1F4B5}";
  } else if (productState == "ALREADY_IN_CART") {
    label = "Já incluso no carrinho \u{1F6D2}";
  } else if (productState == "OUT_OF_STOCK") {
    label = "Indisponível \u274C";
  }

  return (
    <button
      type="button"
      className={
        "storybook-button storybook-button--medium storybook-button--secondary"
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
