import React from 'react';
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
  const {
      setIsOpen, cart, total, clearCart, handlePayment
  } = useCart();

  return (
      <div className="w-full h-full px-4 text-white">
        <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
            {/* close icon */}
            <div
                className="text-4xl w-20 h-[100px] flex justify-start items-center cursor-pointer"
                onClick={() => setIsOpen(false)}
            >
                <IoClose />
            </div>
            <div className="flex flex-col gap-y-10 px-2">
                {cart?.map((item) => {
                    return (
                        <CartItem item={item} key={item?.id} />
                    );
                })}
            </div>
        </div>
          {/* subtotal and total */}
          {cart?.length >= 1 && (
              <div className="px-6 py-10 flex-col dir-rtl">
                  <div>
                      {/* subtotal */}
                      <div className="flex justify-between text-lg ">
                          <div>
                              סכום משנה
                          </div>
                          <div>
                              ₪ {parseFloat(total)}
                          </div>
                      </div>
                      {/* total */}
                      <div className="flex justify-between text-2xl">
                          <div>
                              סכום כולל
                          </div>
                          <div>
                              ₪ {parseFloat(total)}
                          </div>
                      </div>
                  </div>
              </div>
          )}
          {/* buttons */}
          <div className="px-6">
              {cart?.length >= 1 ? (
                  <div className="flex justify-between gap-x-4">
                      <button onClick={() => clearCart()} className="btn btn-accent hover:bg-accent-hover text-primary transform transition-transform hover:scale-105 hover:shadow-md">
                          נקה עגלה
                      </button>
                      <button onClick={() => handlePayment()} className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2 transform transition-transform hover:scale-105 hover:shadow-md">
                          לסיום הרכישה
                          <IoArrowForward className="text-lg" />
                      </button>
                  </div>
              ) : (
                  <div
                      className="h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30">
                      <div className="text-2xl">העגלה שלך ריקה</div>
                      <div className="text-6xl">
                          <IoCartOutline />
                      </div>
                  </div>
              )}
          </div>
      </div>
  );
};

export default Cart;
