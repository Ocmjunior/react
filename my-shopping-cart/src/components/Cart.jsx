import React from "react";

function Cart({ cartItems, onRemoveFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - R${item.price} x {item.quantity} = R${item.price * item.quantity}
            <button onClick={() => onRemoveFromCart(item)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Total: R${total}</p>
    </div>
  );
}

export default Cart;
    