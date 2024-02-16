import { useCallback, useEffect, useState } from "react";
import { Product } from "../utils/interfaces.ts";
import { toast } from 'react-toastify';

export const useCartContext = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [itemsAmount, setItemsAmount] = useState(0);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [boughtCart, setBoughtCart] = useState([]);
    const [boughtTotal, setBoughtTotal] = useState(0);

    // Load cart data from local storage on component mount
    useEffect(() => {
        const storedCartJson = localStorage.getItem('cart');
        const storedItemsAmountJson = localStorage.getItem('itemsAmount');

        const storedCart = JSON.parse(storedCartJson);
        const storedItemsAmount = JSON.parse(storedItemsAmountJson);
        if (storedCart && storedCart.length > 0) {
            setCart(storedCart);
            setItemsAmount(storedItemsAmount);
        }
    }, [setCart, setItemsAmount]);

    // Save cart data to local storage whenever the cart is updated
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('itemsAmount', JSON.stringify(itemsAmount));
    }, [cart, itemsAmount]);

    // cart amount
    useEffect(() => {
        const amount = cart?.reduce((a: number, c: Product) => {
            return a + Number(c?.amount);
        }, 0);

        setItemsAmount(amount);
    }, [cart]);

    // cart total
    useEffect(() => {
        const total = cart?.reduce((a, c) => {
            return a + Number(c?.attributes?.price) * Number(c?.amount);
        }, 0);
        setTotal(total);
    }, [cart]);

    // add to cart
    const addToCart = useCallback((product: Product, id: number) => {
        const itemId = parseInt(id);
        const newItem = { ...product, amount: 1 };

        // check if the item already in the cart
        const cartItem = cart?.find((item) => {
            return item.id === itemId
        })

        if (cartItem?.amount >= 10) {
            return toast.error('לא ניתן להזמין יותר מ-10 פריטים מאותו מוצר בהזמנה אחת');
        }

        if (cartItem) {
            const newCart = cart?.map((item) => {
                if (item.id === itemId) {
                    setAmount(cartItem.amount + 1);
                    return {...item, amount: cartItem.amount + 1};
                } else {
                    return item;
                }
            })
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }

        // open the cart:
        setIsOpen(true);
    }, [cart]);

    // remove from cart
    const removeFromCart = useCallback((id) => {
        const newCart = cart?.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    }, [cart]);

    // handle quantity input
    const handleQuantityInput = useCallback((e: any, id: number) => {
        const value = parseInt(e?.target?.value);
        // find the item by id
        const cartItem = cart?.find((product: Product) => {
            return product.id === id;
        });

        if (cartItem) {
            const newCart = cart?.map((product: Product) => {
                if (product.id === id) {
                    if (isNaN(value)) {
                        setAmount(1);
                        return { ...product, amount: 1};
                    } else {
                        setAmount(value);
                        return { ...product, amount: value };
                    }
                } else {
                    return product;
                }
            });
            setCart(newCart);
        }
        setIsOpen(true);
    }, [cart]);

    // handel quantity select
    const handleSelect = useCallback((e: any, id: number) => {
        const value = parseInt(e?.target?.value);
        // find the item by id
        const cartItem = cart?.find((product: Product) => {
            return product.id === id;
        });
        if (cartItem) {
            const newCart = [...cart].map((product: Product) => {
                if (product?.id === id) {
                    setAmount(value);
                    return { ...product, amount: value };
                } else {
                    return product;
                }
            });

            setCart(newCart);
        }
    }, [cart]);

    // clear cart
    const clearCart = useCallback(() => {
        setCart([]);
        setTotal(0);
        setAmount(0);
        setItemsAmount(0);
    }, []);

    return {
        isOpen,
        setIsOpen,
        cart,
        setCart,
        setAmount,
        amount,
        setItemsAmount,
        itemsAmount,
        total,
        addToCart,
        removeFromCart,
        handleQuantityInput,
        handleSelect,
        clearCart,
        boughtCart,
        setBoughtCart,
        boughtTotal,
        setBoughtTotal
    };
};
