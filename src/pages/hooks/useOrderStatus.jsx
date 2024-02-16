import {useState} from "react";
import {request} from "../../request";
import {toast} from "react-toastify";

export const useOrderStatus = () => {
    const [orderId, setOrderId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [orderStatus, setOrderStatus] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state

    const handleSearch = async () => {
        if (phoneNumber && phoneNumber !== '' && orderId && orderId !== '') {
            setLoading(true); // Set loading state to false after API call completes
            await fetchOrderStatus();
        } else {
            toast.error('מספר טלפון או/ו מספר הזמנה לא סופק, אנא בדוק את השדות');
        }
    };
    const fetchOrderStatus = async () => {
        try {
            const response = await request.get('/orders', {
                orderId,
                phoneNumber
            });
            if (response && response.data?.data) {
                const foundOrder = response.data?.data?.find((order: any) => {
                    return order?.attributes?.orderId === orderId && order?.attributes?.phoneNumber === phoneNumber
                });
                if (foundOrder) {
                    setOrderStatus(foundOrder?.attributes?.orderStatus);
                    setLoading(false);
                } else {
                    toastError();
                }
            } else {
                toastError();
            }
        } catch (error) {
            toastError();
            console.log(error);
        }
    };

    const toastError = () => {
        toast.error('לא נמצאה הזמנה, אנא בדוק את השדות ונסה שוב');
        setLoading(false);
    };

    return {
        setOrderId,
        orderId,
        phoneNumber,
        setPhoneNumber,
        orderStatus,
        handleSearch,
        loading
    };
};
