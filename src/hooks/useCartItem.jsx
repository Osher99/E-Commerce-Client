import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export const useCartItem = (item) => {
    const { removeFromCart } = useContext(CartContext);

    return {
        removeFromCart
    };
};
