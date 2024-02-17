import useFetch from "./useFetch";
import { API_URL_PATHS } from "../utils/constants.ts";
import { useEffect, useState } from "react";

export const useCategoryNav = () => {
    const [loading, setLoading] = useState(false); // Add loading state
    const { data } = useFetch(API_URL_PATHS.CATEGORIES);

    useEffect(() => {
        if (!data) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [data]);

    return {
        data,
        loading
    };
};