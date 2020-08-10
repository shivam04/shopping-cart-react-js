import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import CartContext from "./context/cartContext";
import cartService from "./service/cartService";
import Cart from "./components/Cart";
import Axios from "axios";
import ProductContext from "./context/productContext";

class App extends Component {
  state = { cart: [], products: [] };
  async componentDidMount() {
    const cart = cartService.getCart();
    let result = await Axios("https://fakestoreapi.com/products");
    const products = result.data;
    this.setState({ cart, products });
  }

  handleAddToCart = (product) => {
    cartService.setCart(product);
    this.setState({ cart: cartService.getCart() });
  };

  handleIncrease = (product) => {
    cartService.increase(product);
    this.setState({ cart: cartService.getCart() });
  };

  handleDecrease = (product) => {
    cartService.decrease(product);
    this.setState({ cart: cartService.getCart() });
  };

  handleremoveItem = (product) => {
    cartService.removeItem(product);
    this.setState({ cart: cartService.getCart() });
  };

  handleCheckOut = () => {
    cartService.checkOut();
    this.setState({ cart: cartService.getCart() });
    //create order
  };

  handleClear = () => {
    cartService.clear();
    this.setState({ cart: cartService.getCart() });
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          handleAddToCart: this.handleAddToCart,
          increase: this.handleIncrease,
          decrease: this.handleDecrease,
          removeItem: this.handleremoveItem,
          clear: this.handleClear,
          checkOut: this.handleCheckOut,
        }}
      >
        <ProductContext.Provider value={{ products: this.state.products }}>
          <div className="row">
            <div className="col-6">
              <Products />
            </div>
            <div className="col">
              <Cart />
            </div>
          </div>
        </ProductContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
