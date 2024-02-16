import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { API_URL_PATHS } from "../../utils/constants.ts";

export const useSearch = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location?.search);
    const searchVal = searchParams.get('query');

    const { data } = useFetch(`${API_URL_PATHS.PRODUCT_SEARCH_BY_VAL}${searchVal}`);

    return {
        data,
        searchVal
    };
};
