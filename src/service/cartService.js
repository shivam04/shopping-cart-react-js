export function getCart() {
  return JSON.parse(localStorage.getItem("cart"));
}

export function setCart(product) {
  let cart = getCart();
  if (!cart) {
    cart = [];
  }
  if (!cart.find((item) => item.id === product.id)) {
    cart.push({
      ...product,
      quantity: 1,
    });
  } else {
    increase(product);
    return;
  }
  cart = JSON.stringify(cart);
  localStorage.setItem("cart", cart);
}

export function increase(product) {
  let cart = getCart();
  cart[cart.findIndex((item) => item.id === product.id)].quantity++;
  cart = JSON.stringify(cart);
  localStorage.setItem("cart", cart);
}

export function decrease(product) {
  let cart = getCart();
  let idx = cart.findIndex((item) => item.id === product.id);
  cart[idx].quantity--;
  if (cart[idx].quantity === 0) {
    cart = cart.filter((item) => item.id !== product.id);
  }
  cart = JSON.stringify(cart);
  localStorage.setItem("cart", cart);
}

export function removeItem(product) {
  let cart = getCart();
  console.log(cart);
  cart = cart.filter((item) => item.id !== product.id);
  console.log(cart);
  cart = JSON.stringify(cart);
  localStorage.setItem("cart", cart);
}

export function checkOut(product) {
  let cart = [];
  cart = JSON.stringify(cart);
  localStorage.setItem("cart", cart);
}

export function clear(product) {
  let cart = [];
  cart = JSON.stringify(cart);
  localStorage.setItem("cart", cart);
}

export function getTotalAmount() {
  const cart = getCart();
  let total = 0;
  if (!cart) return total;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity * cart[i].price;
  }
  return total;
}

export default {
  getCart,
  setCart,
  increase,
  decrease,
  removeItem,
  checkOut,
  clear,
  getTotalAmount,
};
