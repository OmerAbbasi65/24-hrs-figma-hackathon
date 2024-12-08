"use client";

import { useState } from 'react';  
import Image from 'next/image';
import UserIcon from "../../public/images/icons/user-icon.png";
import Search from "../../public/images/icons/search-icon.png";
import Favs from "../../public/images/icons/heart-icon.png";
import Cart from "../../public/images/icons/shopping-cart-icon.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <header className="desktop home-bg h-[100px] md:h-[150px] lg:h-[100px] my-header">
        <nav className='mynav inline'>
          <div className='flex justify-center'>  
            <ul className='mynavUl flex'>
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <ul className='mynavUl2 flex justify-end'>
            <li><a href="#useraccount"><Image src={UserIcon} alt="User Icon" /></a></li>
            <li><a href="#search"><Image src={Search} alt="Search" /></a></li>
            <li><a href="#favs"><Image src={Favs} alt="Favs" /></a></li>
            <li><a href="#cart"><Image src={Cart} alt="Cart" /></a></li>
          </ul>
        </nav>
      </header>
      
      {/* Mobile Header */}
      <header className="mobile home-bg h-[100px] md:h-[150px] lg:h-[100px] my-header">
        <nav className="mynav inline">
          {/* Hamburger Menu for mobile */}
          <div
            className="block p-4 cursor-pointer"
            onClick={toggleSidebar}
          >
            <div className="w-6 h-1 bg-black color-white my-1"></div>
            <div className="w-6 h-1 bg-black my-1"></div>
            <div className="w-6 h-1 bg-black my-1"></div>
          </div>

          {/* Sidebar */}
          {isSidebarOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
              <div className="p-4 flex justify-end">
                <button
                  className="text-2xl font-bold"
                  onClick={closeSidebar}
                  aria-label="Close Sidebar"
                >
                  X
                </button>
              </div>
              <div className="flex justify-center items-center h-full">
                <ul className="flex flex-col items-center space-y-6">
                  <li>
                    <a href="#home" onClick={closeSidebar}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#shop" onClick={closeSidebar}>
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={closeSidebar}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={closeSidebar}>
                      Contact
                    </a>
                  </li>
                </ul>
                
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
