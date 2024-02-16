import {useContext} from "react";
import { CartContext } from "../context/CartProvider";
import { useNavigate } from 'react-router-dom';

export const useCart = () => {
    const { setIsOpen, cart, total, clearCart } = useContext(CartContext);
    const navigate = useNavigate();


    const handlePayment = () => {
        navigate('/checkout');
    };

    //const attachStripe = /*async*/ () => {
        // NOT USED - STRIPE
        // try {
        // const stripePromise = loadStripe();
        //    const stripe = await stripePromise;
        //    console.log(cart)
        //    const res = await request.post('/orders', {
        //        cart
        //    });
        //    await stripe.redirectToCheckout({
        //        sessionId: res.data.stripeSession.id
        //    })
        // } catch (e) {
        //     return toast.error('אירעה שגיאה בסיום ההזמנה, אנא נסה שוב מאוחר יותר');
        // }
    //};

    return {
        setIsOpen, cart, total, clearCart, handlePayment
    };
};
