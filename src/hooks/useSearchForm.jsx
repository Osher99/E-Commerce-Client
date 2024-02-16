import { useNavigate } from "react-router-dom";
import {useCallback, useEffect, useState} from "react";

export const useSearchForm = () => {
    const navigate = useNavigate();
    const [searchVal, setSearchVal] = useState('');
    const [isAnimating,  setIsAnimating] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
        return () => clearTimeout((timeout));
    }, [isAnimating]);

    const handleSearchInput = useCallback((e) => {
        setSearchVal(e?.target?.value);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchVal?.length > 2) {
            navigate(`/search?query=${searchVal}`)
            const search = document.getElementsByClassName('search-input')?.[1];
            if (search) search.value = '';

            setSearchVal('');
        } else {
            setIsAnimating(true);
        }
    };

    return {
        handleSearchInput,
        handleSubmit,
        isAnimating
    };
};