import React from 'react';
import { useCheckOut } from "../hooks/useCheckOut";
import { BiSolidTrash, BiSolidTruck } from "react-icons/bi";
import { css } from "@emotion/react"; // Import css function from react-spinners
import { ClipLoader } from "react-spinners"; // Import ClipLoader spinner component

const override = css`
  display: flex;  
  justify-content: center;
  margin: 0 auto;
  border-color: lightgreen;
`;

const CheckOut = () => {
    const {
        fullName, setFullName, email, setEmail, phone, setPhone, city, setCity, street, setStreet, houseNumber,
        setHouseNumber, apartment, setApartment, zipCode, setZipCode, paymentType, setPaymentType, handleSubmit, cart, removeFromCart, loading, total
    } = useCheckOut();

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 dir-rtl lg:mt-0 lg:mt-8 py-8 lg:py-0">
            <ClipLoader color={"#123abc"} loading={loading} css={override} size={150} />
            {!loading && (
                <>
                    <h1 className="text-3xl font-semibold mb-6 text-center checkout-title">סיום רכישה</h1>
                    {/* Cart Items */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">מוצרים</h2>
                        <div className="flex flex-col w-fit flex-wrap justify-between products-grid-summary">
                            {cart?.map((product) => (
                                <div key={product.id} className="bg-white rounded-md p-4 m-2 flex justify-between">
                                    <div className="flex  justify-between items-center">
                                        <img
                                            src={`http://localhost:1337${product?.attributes?.image?.data?.[0]?.attributes?.url}`}
                                            alt={product?.attributes?.title}
                                            className="w-24 h-24 flex items-center  justify-between object-cover mr-4"/> />
                                        <div className="flex justify-between flex-col">
                                            <p className="text-xl font-semibold text-primary mr-4">{product?.attributes?.title}</p>
                                            <br/>
                                            <div className="text-gray-500">
                                                <p className="text-xl">מחיר ₪{product?.attributes?.price}</p>
                                                <p className="text-lg">כמות {product.amount}</p>
                                                <p className="text-lg font-extrabold">סה"כ
                                                    ₪{product?.attributes?.price * product.amount}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={() => removeFromCart(product.id)}>
                                        <BiSolidTrash className="h-6 w-6 text-red-500"/>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Basic Info Section */}
                    <div className="mb-6 text-center">
                        <h2 className="text-xl font-semibold mb-3">פרטים אישיים</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <input type="text" required className="input text-center" placeholder="שם מלא"
                                       value={fullName}
                                       onChange={(e) => setFullName(e.target.value)}/>
                                <input type="email" required className="input text-center" placeholder="אימייל"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                                <input type="tel" required className="input text-center" placeholder="מספר טלפון"
                                       value={phone}
                                       onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                        </form>
                    </div>
                    {/* Address Info Section */}
                    <div className="mb-6 text-center">
                        <h2 className="text-xl font-semibold mb-3">פרטי כתובת</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <input type="text" className="input text-center" placeholder="עיר" value={city}
                                       onChange={(e) => setCity(e.target.value)}/>
                                <input type="text" className="input text-center" placeholder="רחוב" value={street}
                                       onChange={(e) => setStreet(e.target.value)}/>
                                <input type="text" className="input text-center" placeholder="מספר בית"
                                       value={houseNumber}
                                       onChange={(e) => setHouseNumber(e.target.value)}/>
                                <input type="text" className="input text-center" placeholder="מספר דירה"
                                       value={apartment}
                                       onChange={(e) => setApartment(e.target.value)}/>
                                <input type="text" className="input text-center" placeholder="מיקוד" value={zipCode}
                                       onChange={(e) => setZipCode(e.target.value)}/>
                            </div>
                        </form>
                    </div>
                    {/* Subtotal */}
                    <div className="mb-6 text-center">
                        <h2 className="text-xl font-semibold mb-3">מחיר כולל</h2>
                        <p className="text-3xl font-bold">₪{total}</p> {/* Adjust text size and font weight */}
                    </div>
                    {/* Free Shipping Section */}
                    <div className="mb-6 bg-green-100 p-4 rounded-md text-center">
                        <p className="text-green-800 font-semibold">
                            <div className="mb-6 flex items-center justify-center">
                                <BiSolidTruck className="h-8 w-20 mr-2"/> {/* Truck icon at the beginning */}
                                <p className="text-green-800 font-semibold">משלוח חינם עד הדלת!</p>
                                <BiSolidTruck className="h-8 w-20 ml-2"/> {/* Truck icon at the end */}
                            </div>
                        </p>
                    </div>
                    {/* Payment Type */}
                    <div className="mb-6 text-center">
                        <h2 className="text-xl font-semibold mb-3">אמצעי תשלום</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <div className="mb-2">
                                    <input className="ml-3 h-5 w-5" type="radio" id="cash" name="paymentType"
                                           value="cash"
                                           checked={paymentType === 'cash'} onChange={() => setPaymentType('cash')}
                                           required/>
                                    <label htmlFor="cash" className="ml-2 text-lg">מזומן לשליח</label>
                                </div>
                                <div>
                                    <input className="ml-3 h-5 w-5" type="radio" id="bit" name="paymentType" value="bit"
                                           checked={paymentType === 'bit'}
                                           onChange={() => setPaymentType('bit')} required/>
                                    <label htmlFor="bit" className="ml-2 text-lg">ביט (בקשת תשלום תישלח במייל ובווצאפ)</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Complete Order Button */}
                    <button className="btn btn-accent w-full text-center" onClick={handleSubmit}>סיום הזמנה</button>
                </>
            )}
        </div>
    );
};

export default CheckOut;