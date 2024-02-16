import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import { API_URL_PATHS } from "../../utils/constants.ts";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

export const useProductDetails = () => {
    const { id } = useParams();
    const { data } = useFetch(`${API_URL_PATHS.PRODUCT_BY_ID}${id}`)
    const { addToCart } = useContext(CartContext);

    const categoryTitle = data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title;

    return {
        data,
        categoryTitle,
        addToCart,
        id
    };
};
