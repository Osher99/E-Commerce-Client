import React from 'react';
import Logo from '../img/ZeroGames-logos_white.png';

const About = () => {
    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 dir-rtl">
            <div className="flex items-center mb-8">
                <Logo /> {/* Render your logo component */}
                <h1 className="text-3xl font-semibold ml-4">עלינו</h1>
            </div>
            <div className="text-lg text-right">
                <p className="mb-4">
                    ZeroGames הוא חברת משלוחים מהירה שפועלת בתחום משלוח משחקים וציוד גיימינג.
                    עם עקרונות פשטות של אמינות, מהירות ושירות מעולה, אנו מתמקדים במטרה לשנות את המשחק בתחום ולספק ללקוחותינו
                    חוויית שירות משלוחים מהיר ואיכותי יותר.
                </p>
                <p>
                    נשמח להיות לכם לעזרה ולספק לכם את השירות הטוב ביותר!
                </p>
            </div>
        </div>
    );
};

export default About;