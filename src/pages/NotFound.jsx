import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiErrorCircle } from "react-icons/bi";

const NotFound = () => {
    const navigate = useNavigate();

    // Redirect to the home page
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dir-rtl">
            <div className="max-w-lg text-center">
                <BiErrorCircle className="text-red-500 text-6xl mb-4" />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - הדף לא נמצא</h1>
                <p className="text-lg text-gray-600 mb-8">אופס! הדף שאתה מחפש לא קיים.</p>
                <p className="text-lg text-gray-600">אתה תופנה לדף הבית בקרוב...</p>
            </div>
        </div>
    );
};

export default NotFound;