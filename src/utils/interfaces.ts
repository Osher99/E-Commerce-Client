export interface Product {
    id: number;
    attributes: Attributes;
    amount?: number;
}

export interface Category {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    categories?: Category[];
    products?: Product[];
    createdAt?: string;
    description?: string;
    image?: any;
    data?: any;
    isActive?: boolean;
    isNew?: boolean;
    price?: number;
    publishedAt?: string;
    title?: string;
    updatedAt?: string;
}
