import {useContext, useEffect, useState} from "react";
import { CartContext } from "../context/CartProvider";
import { request } from "../request";
import { HEBREW_CONSTANTS } from "../utils/constants.ts";
import { generateUniqueId, getFullAddress } from "../utils/utils.ts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useCheckOut = () => {
    // Define state variables for form inputs
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [apartment, setApartment] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const { cart, total, clearCart, removeFromCart, setBoughtCart, setBoughtTotal, setIsOpen } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (cart.length === 0) {
          // Redirect the user to the home page
          navigate('/');
        }
      }, [cart, navigate]);

    useEffect(() => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    }, [setIsOpen]);

    const checkRequiredFields = () => {
        if (!fullName || fullName === '') {
            toast.error('שדה שם מלא חסר או לא תקין, אנא מלא את כל שדות החובה');
            return false;
        }
        if (!phone || phone === '') {
            toast.error('שדה מספר טלפון חסר או לא תקין, אנא מלא את כל שדות החובה');
            return false;
        }
        if (!email || email === '') {
            toast.error('שדה אימייל חסר או לא תקין, אנא מלא את כל שדות החובה');
            return false;
        }
        if (!city || city === '') {
            toast.error('שדה עיר חסר או לא תקין, אנא מלא את כל שדות החובה');
            return false;
        }
        if (!street || street === '') {
            toast.error('שדה רחוב חסר או לא תקין, אנא מלא את כל שדות החובה');
            return false;
        }
        if (!houseNumber || houseNumber === '') {
            toast.error('שדה מספר בית חסר או לא תקין, אנא מלא את כל שדות החובה');
            return false;
        }
        
        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        if (!checkRequiredFields()) {
            return;
        }

        e.preventDefault();
        const orderId = generateUniqueId();
        setLoading(true); // Set loading state to true when API call starts
        await request.post('/orders', {
            orderId,
            cart,
            totalPrice: total,
            deliveryType: HEBREW_CONSTANTS.DELIVERY_TYPE_EXPRESS,
            fullName,
            phoneNumber: phone,
            paymentType,
            email,
            fullAddress: getFullAddress(city, street, houseNumber, apartment, zipCode),
            orderStatus: HEBREW_CONSTANTS.CONFIRMED_DELIVERY_STATUS
        }).then((response: any) => {
            if (response) {
                setBoughtCart(cart);
                setBoughtTotal(total)
                clearCart();
                toast.success(response?.message);
                navigate(`/success/${orderId}`)
            }
        }).catch((err) => {
            toast.error('התרחשה שגיאה בעת ביצוע ההזמנה, אנא נסו שוב מאוחר יותר');
            console.log(err);
        });
        setLoading(false); // Set loading state to false after API call completes
    };

    return {
        fullName, setFullName, email, setEmail, phone, setPhone, city, setCity, street, setStreet, houseNumber,
        setHouseNumber, apartment, setApartment, zipCode, setZipCode, paymentType, setPaymentType, handleSubmit,
        cart, removeFromCart, loading, total
    };
};
