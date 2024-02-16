export const API_URL_PATHS = {
    PRODUCT_SEARCH_BY_VAL: '/products?populate=*&filters[title][$contains]=',
    CATEGORIES: '/categories',
    NEW_PRODUCTS: '/products?populate=*&filters[isNew]=true',
    PRODUCTS_BY_CATEGORY_ID: '/products?populate=*&filters[categories][id][$eq]=',
    PRODUCT_BY_ID: '/products?populate=*&filters[id][$eq]=',
    PRODUCTS_BY_CATEGORY_TITLE: '/products?populate=*&filters[categories][title]='
};

export const HEBREW_CONSTANTS = {
    DELIVERY_TYPE_EXPRESS: 'שליח עד הבית',
    CONFIRMED_DELIVERY_STATUS: 'אושרה'
};
