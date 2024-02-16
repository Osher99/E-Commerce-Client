import React, {useContext} from 'react';
import Logo from '../img/ZeroGames-logos_white.png';
import { SlBag } from 'react-icons/sl';
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import SearchForm from "./SearchForm";
import CategoryNavMobile from "./CategoryNavMobile";
import Cart from "./Cart";
import { CartContext } from "../context/CartProvider";
import { useHeader } from "../hooks/useHeader";

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const { catNavMobile, setCatNavMobile } = useHeader();
  return (
      <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
        <div className="container mx-auto">
          <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">
            {/* menu */}
            <div onClick={() => setCatNavMobile(true)} className="text-3xl xl:hidden cursor-pointer">
              <FiMenu />
            </div>
            {/* category nav mobile - show on mobile only */}
            <div className={`${catNavMobile ? 'left-0' : '-left-full'} fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}>
              <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
            </div>
            {/* logo */}
            <Link to={'/'}>
              <img className="w-[35%] mt-[-10px] logo-extra-style" src={Logo} alt="logo"/>
            </Link>
            {/* search form - desktop */}
            <div className="hidden w-full xl:flex xl:max-w-[734px] search-form-desktop">
              <SearchForm />
            </div>
            {/* phone & cart */}
            <div className="flex items-center gap-x-[10px] bag-extra-style">
              <div className="hidden xl:flex uppercase whitespace-nowrap">צריך עזרה? 052-6540414</div>
              <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer">
                <SlBag className="text-2xl" />
                {/* amount */}
                <div className="bg-accent text-primary absolute w-[24px] h-[23px] rounded-full top-33 -right-1 text-[17px] flex justify-center items-center font-bold tracking-[-0.1em] cart-amount">{Number(itemsAmount)}</div>
              </div>
              {/* cart */}
              <div className={`
              ${isOpen ? 'right-0' : '-right-full'}
              bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}>
                <Cart/>
              </div>
            </div>
          </div>
          {/* search form - show on mobile only */}
          <div className="xl:hidden">
            <SearchForm />
          </div>
        </div>
      </header>
  );
};

export default Header;
