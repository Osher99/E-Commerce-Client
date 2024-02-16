import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export const useQty = () => {
    const { handleQuantityInput, handleSelect } = useContext(CartContext);

    return {
        handleQuantityInput,
        handleSelect
    };
};
