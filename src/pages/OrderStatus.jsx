import React from 'react';
import { BiCheckCircle, BiSearch } from 'react-icons/bi';
import { useOrderStatus } from "./hooks/useOrderStatus";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-color: lightgreen;
`;

const OrderStatus = () => {
    const {
        setOrderId, setPhoneNumber, handleSearch, orderStatus, orderId, phoneNumber, loading
    } = useOrderStatus();
    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 dir-rtl lg:mt-0 lg:mt-8 py-8 lg:py-0 dir-rtl">
            <ClipLoader color={"#123abc"} loading={loading} css={override} size={150} />
            {!loading && (
                <>
                    <h1 className="text-3xl font-semibold mb-6 text-center">בדיקת מעקב הזמנה</h1>
                    <div className="flex flex-col md:flex-row items-center mb-4">
                        <input
                            type="text"
                            className="input mb-2 md:mb-0 mr-0 md:mr-4 dir-rtl"
                            placeholder="מספר הזמנה"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        />
                        <input
                            type="tel"
                            className="input mb-2 md:mb-0 mr-0 md:mr-4 dir-rtl"
                            placeholder="מספר טלפון"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <button className="btn btn-accent mr-[15px]" onClick={handleSearch}>
                            <BiSearch className="text-4xl" />
                            <span className="text-xl ml-2 hidden md:inline">חפש הזמנה</span>
                        </button>
                    </div>
                    {orderStatus && (
                        <p className="text-2xl font-light flex flex-col items-center">
                            <span>מספר הזמנה:</span>
                            <span className="font-light">{orderId} #</span>
                            <span className="flex items-center">
                                <span className="uppercase font-bold"> סטטוס: {orderStatus}</span>
                                <BiCheckCircle className="text-green-500" />
                                <span></span>
                            </span>
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default OrderStatus;