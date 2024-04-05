import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

const products = JSON.parse(document.getElementById('products').textContent); // Carregar dados do JSON

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App;
