import React, { createContext } from 'react';
import { useCartContext } from "../hooks/useCartContext";

export const CartContext = createContext();

interface Props {
    children: any;
}

const CartProvider = ({ children }: Props) => {
  const {
      isOpen, setIsOpen, cart, addToCart,
      total, itemsAmount, handleSelect,
      removeFromCart, handleQuantityInput, clearCart,
      setBoughtCart, boughtCart, boughtTotal, setBoughtTotal
  } = useCartContext();

  return (
      <CartContext.Provider
          value={{
            isOpen, setIsOpen, addToCart, cart,
              removeFromCart, itemsAmount, handleQuantityInput,
              handleSelect, total, clearCart, setBoughtCart, boughtCart,
              boughtTotal, setBoughtTotal
        }}
      >
        {children}
      </CartContext.Provider>
  );
};

export default CartProvider;
