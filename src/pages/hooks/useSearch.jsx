import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { API_URL_PATHS } from "../../utils/constants.ts";
import { useEffect, useState } from "react";

export const useSearch = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location?.search);
    const searchVal = searchParams.get('query');
    const [loading, setLoading] = useState(false);

    const { data } = useFetch(`${API_URL_PATHS.PRODUCT_SEARCH_BY_VAL}${searchVal}`);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!data) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [data]);

    return {
        data,
        searchVal,
        loading
    };
};
