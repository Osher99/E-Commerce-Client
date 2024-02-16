import { useState } from "react";

export const useHeader = () => {
    const [catNavMobile, setCatNavMobile] = useState(false);

    return {
        catNavMobile,
        setCatNavMobile
    };
};