import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import { API_URL_PATHS } from "../../utils/constants.ts";

export const useProducts = () => {
    const { id } = useParams();
    const [title, setTitle] = useState(null);
    const { data } = useFetch(`${API_URL_PATHS.PRODUCTS_BY_CATEGORY_ID}${id}`);
    useEffect(() => {
        if (data) {
            setTitle(data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title)
        }
    }, [data]);
    return {
        data,
        title
    };
};
