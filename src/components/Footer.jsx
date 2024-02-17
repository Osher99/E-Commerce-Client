import React from 'react';
import {
    FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp
} from 'react-icons/fa';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
      <footer className="pt-16 bg-primary">
          <div className="container mx-auto dir-rtl">
              <div className="text-center">
                  <h2 className="h2 uppercase mb-6 font-semibold">
                      הירשם לניוזלטר שלנו!
                  </h2>
                  <p className="text-white/70">
                      תהיו הראשונים לקבל את ההנחות, המשחקים והמבצעים השווים ביותר!
                  </p>
              </div>
              <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14" action="">
                  <input
                      type="text"
                      placeholder="האימייל שלך"
                      className="input text-center dir-rtl"
                      disabled
                  />
                  <button disabled className="btn btn-accent min-w-[150px] dir-rtl">
                      הירשם
                  </button>
              </form>
              <div className="text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9 dir-rtl">
                  <Link to="about-page" className="hover: text-white transition-all">
                      אודות
                  </Link>
                  <Link to="order-status" className="hover: text-white transition-all">
                      בדיקת הזמנה
                  </Link>
              </div>
              <div className="flex gap-x-6 max-w-max mx-auto text-lg mb-16 ">
                  <a href="/home" className="hover: text-white transition-all">
                      <FaInstagram/>
                  </a>
                  <a href="/home" className="hover: text-white transition-all">
                      <FaFacebook/>
                  </a>
                  <a href="/home" className="hover: text-white transition-all">
                      <FaTwitter/>
                  </a>
                  <a href="/home" className="hover: text-white transition-all">
                      <FaYoutube/>
                  </a>
                  <a href="/home" className="hover: text-white transition-all">
                      <FaWhatsapp/>
                  </a>
              </div>
          </div>
          <div className="py-10 border-t border-t-whire/10">
              <div className="container mx-auto">
                  <div className="text-center text-sm text-white/60 dir-rtl">זכויות יוצרים &copy; ZeroGames 2024. כל הזכויות שמורות</div>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
