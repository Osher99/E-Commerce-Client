import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from "../context/CartProvider";
import {IoCartOutline} from "react-icons/io5";
import { BACK_END_URL } from '../utils/constants.ts';

interface Props {
    product: any;
}

const Product = ({ product }: Props) => {
    const { addToCart } = useContext(CartContext);

    return (
      <Link to={`/product/${product?.id}`}>
          <div className="grad w-full h-[362px] rounded-[8px] overflow-hidden relative group">
              {/* badge */}
              {product?.attributes?.isNew && (
                  <div
                      className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
                      חדש
                  </div>
              )}
              {/* image */}
              <div className="w-full h-[200px] flex items-center justify-center relative">
                  <img
                      className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
                      src={`${BACK_END_URL}${product?.attributes?.image?.data?.[0]?.attributes?.url}`}
                      alt=""
                  />
              </div>
              {/* text */}
              <div className="px-3 pb-8 flex-col justify-between h-auto">
                  {/* category title */}
                  <div
                      className="product-category-title text-sm text-accent capitalize mb-2 mr-[10px]">{product?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
                  <hr/>
                  {/* title */}
                  <div className="title-container">
                      <div
                          className="text-[14px] mb-4 mr-[10px]">{product?.attributes?.title?.length > 40 ? `${product?.attributes?.title?.substring(0, 35)}...` : product?.attributes?.title}</div>
                      {/* price */}
                      <div className="text-lg text-accent mt-[5rem]">₪{product?.attributes?.price}</div>
                  </div>
                  <button
                      onClick={(event) => {
                          event.preventDefault();
                          addToCart(product, product?.id);
                      }}
                      className="btn btn-accent font-semibold text-xl transform transition-transform hover:scale-105 hover:shadow-md cart-icon  p-5"
                  >
                      <IoCartOutline/>
                  </button>
              </div>
          </div>
      </Link>
    );
};

export default Product;
