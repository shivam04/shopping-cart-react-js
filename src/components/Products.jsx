import React, { Fragment, useContext } from "react";
import CartContext from "../context/cartContext";
import ProductContext from "../context/productContext";

function Products(props) {
  const cartContext = useContext(CartContext);
  const productContext = useContext(ProductContext);

  const { products } = productContext;

  return (
    <div className="container">
      {products.map((product) => (
        <Fragment key={product.id}>
          <li>{product.title}</li>
          <button onClick={() => cartContext.handleAddToCart(product)}>
            {cartContext.cart &&
            cartContext.cart.find((item) => item.id === product.id)
              ? "Add More"
              : "Add To Cart"}
          </button>
        </Fragment>
      ))}
    </div>
  );
}

export default Products;
