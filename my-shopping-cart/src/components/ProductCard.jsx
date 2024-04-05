import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default ProductCard;
