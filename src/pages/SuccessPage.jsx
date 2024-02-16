import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import { useOrderSuccess } from "../hooks/useOrderSuccess"; // Importing an example icon from react-icons

const OrderSuccess = () => {
    const { boughtCart, boughtTotal, orderNumber } = useOrderSuccess();
    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 dir-rtl lg:mt-0 lg:mt-8 py-8 lg:py-0 dir-rtl">
            <h1 className="text-3xl font-semibold mb-6 text-center"><FiCheckCircle className="inline-block text-green-500" />    ההזמנה שלך אושרה! </h1>
            {/* Order Number */}
            <div className="mb-6 text-center">
                <p className="text-xl font-semibold mb-3">{` מספר הזמנה - ${orderNumber} #`}</p>
            </div>
            {/* Ordered Products */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">המוצרים שרכשת</h2>
                <div className="flex flex-col w-fit flex-wrap justify-between">
                    {boughtCart?.map((product) => (
                        <div key={product?.id} className="bg-white rounded-md p-4 m-2 flex justify-between">
                            <div className="flex justify-between items-center">
                                <img
                                    src={`https://zero-games-api.netlify.app${product?.attributes?.image?.data?.[0]?.attributes?.url}`}
                                    alt={product?.attributes?.title}
                                    className="w-24 h-24 flex items-center justify-between object-cover mr-4"
                                />
                                <div className="flex justify-between flex-col items-center">
                                    <p className="text-xl font-semibold text-primary mr-4">{product?.attributes?.title}</p>
                                    <br />
                                    <div className="text-gray-500">
                                        <p className="text-xl">מחיר ₪{product?.attributes?.price}</p>
                                        <p className="text-lg">כמות {product?.amount}</p>
                                        <p className="text-lg font-extrabold">סה"כ ₪{product?.attributes?.price * product?.amount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Total Price */}
            <div className="mb-6 text-center">
                <h2 className="text-xl font-semibold mb-3">סכום כולל</h2>
                <p className="text-xl font-semibold">₪{boughtTotal}</p>
            </div>
            {/* Back to Home Button */}
            <div className="text-center">
                <Link to="/" className="btn btn-accent mr-4">חזרה לדף הבית</Link>
            </div>
        </div>
    );
};

export default OrderSuccess;