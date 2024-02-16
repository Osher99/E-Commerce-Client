import React from 'react';
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Qty from "./Qty";
import { useCartItem } from "../hooks/useCartItem";

interface Props {
    item: any;
}

const CartItem = ({ item }: Props) => {
    const { removeFromCart } = useCartItem(item);
    return (
        <div className="flex gap-x-8 dir-rtl">
            <Link to={`product/${item?.id}`} className="w-[70px] h-[70px]">
                <img
                    src={`https://zero-games-api.netlify.app${item?.attributes?.image?.data?.[0]?.attributes?.url}`}
                    alt=""
                />
            </Link>
            <div className="flex-1">
                {/* title & remove */}
                <div className="flex mb-3 title-remove-container">
                    <Link to={`product/${item?.id}`}>
                        {item?.attributes?.title}
                    </Link>
                    <div
                        onClick={() => removeFromCart(item?.id)}
                        className="cursor-pointer text-[24px] hover:text-accent transition-all"
                    >
                        <IoClose/>
                    </div>
                </div>
                <div className="flex items-center gap-x-12 cart-item-extra-style">
                    {/* quantity */}
                    <div className="flex gap-x-4 mb-2">
                        <Qty item={item}/>
                    </div>
                    <div className="text-accent text-xl">
                        ₪{item?.attributes?.price * item?.amount}
                    </div>
                </div>
                {/* price */}
                <div>
                    <span className="text-accent">
                        ₪{item?.attributes?.price} x {item?.amount}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
