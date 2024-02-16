import useFetch from "./useFetch";
import { API_URL_PATHS } from "../utils/constants.ts";

export const useCategoryNav = () => {
    const { data } = useFetch(API_URL_PATHS.CATEGORIES);

    return {
        data
    };
};