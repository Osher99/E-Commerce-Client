import useFetch from "../../hooks/useFetch";
import { API_URL_PATHS } from "../../utils/constants.ts";

export const useLatestProduct = () => {
    const { data } = useFetch(API_URL_PATHS.NEW_PRODUCTS);

    return {
        data
    };
};