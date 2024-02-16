import {useContext} from "react";
import {CartContext} from "../context/CartProvider";
import {useParams} from "react-router-dom";

export const useOrderSuccess = () => {
    const { orderNumber } = useParams();
    const { boughtCart, boughtTotal } = useContext(CartContext);
    return {
        boughtCart,
        orderNumber,
        boughtTotal
    };
};
