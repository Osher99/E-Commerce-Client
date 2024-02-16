import useFetch from "./useFetch";
import { API_URL_PATHS } from "../utils/constants.ts";

export const useRelatedProducts = (categoryTitle: string) => {
    const { data } = useFetch(`${API_URL_PATHS.PRODUCTS_BY_CATEGORY_TITLE}${categoryTitle}`);

    return {
        data
    };
};
