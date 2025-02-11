import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import CtaButton from "./CtaButton";
import { useNavigate } from "react-router-dom";
import logo from '../img/Digital Degens-01.png';


const NavBar = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const clickHandler = () => {
        setShow(!show);
    };

    return (
        // <div className="w-full xl:h-24 lg:h-20 h-16 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 shadow-lg relative secondary-font">
        <div className="bg-gray-900 w-full xl:h-24 lg:h-20 h-16 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 shadow-lg relative secondary-font">

            {/* logo */}
            {/* <a
        href="/Marketing-Website/"
        // className="lg:text-3xl text-2xl tracking-wide font-light text-[#7A6960]"|
        className="lg:text-3xl text-2xl tracking-wide font-light text-white"

      >
          <img 
          src={logo} 
          alt="Digital Degens Logo" 
          className="w-8 h-8 mr-2"
        />
        Digital Degens
      </a> */}

            <a
                href="/Marketing-Website/"
                className="flex items-center lg:text-3xl text-2xl tracking-wide font-light text-white"
            >
                <img
                    src={logo}
                    alt="Digital Degens Logo"
                    className="w-20 h-20 mr-1 align-middle"
                />
                <span>Digital Degens</span>
            </a>



            {/* menu */}
            <div className="lg:flex items-center justify-between lg:gap-14 hidden">
                <a
                    href="/Marketing-Website/"
                    className="text-white hover:text-blue-400 text-lg tracking-wide font-light"
                >
                    Home
                </a>
                <a
                    href="/Marketing-Website/#about"
                    className="text-white hover:text-blue-400 text-lg tracking-wide font-light"
                >
                    About
                </a>
                <a
                    href="/Marketing-Website/#services"
                    className="text-white hover:text-blue-400 text-lg tracking-wide font-light"
                >
                    Services
                </a>
                <a
                    href="/Marketing-Website/#portfolio"
                    className="text-white hover:text-blue-400 text-lg tracking-wide font-light"
                >
                    Portfolio
                </a>

                <a
                    href="/Marketing-Website/#contact"
                    className="text-white hover:text-blue-400 text-lg tracking-wide font-light"
                >
                    Contact
                </a>

                {/* CTA */}
                {/* <button className="bg-orange-600 text-lg text-slate-50 rounded-3xl px-4 py-1">
          Get Strated
        </button> */}
                <a href="/Marketing-Website/#contact" className="">
                    <CtaButton name={"Get Started"} />
                </a>
            </div>

            {/* mobile menu */}
            <div className="lg:hidden ">
                <RxHamburgerMenu size={"28px"} onClick={clickHandler} />
            </div>

            {show && (
                // <div className="absolute z-20 top-[70px] flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-white transition-all duration-300">
                <div className="absolute z-20 top-full flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-gray-900 transition-all duration-300">

                    <a
                        href="/Marketing-Website/"
                        // className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
                        className="text-white hover:text-blue-400 text-lg tracking-wide font-light"

                    >
                        Home
                    </a>
                    <a
                        href="/Marketing-Website/#about"
                        className="text-white hover:text-blue-400 text-lg tracking-wide font-light"
                    >
                        About
                    </a>
                    <a
                        href="/Marketing-Website/#services"
                        className="text-white hover:text-blue-400 text-lg tracking-wide font-light"
                    >
                        Services
                    </a>
                    <a
                        href="/Marketing-Website/#contact"
                        className="text-white hover:text-blue-400 text-lg tracking-wide font-light"
                    >
                        Contact
                    </a>

                    {/* CTA */}
                    <a
                        href="/Marketing-Website/#contact"
                        className="mt-2 ml-2 flex justify-center items-center"
                    >
                        <CtaButton name={"Get Started"} />
                    </a>
                </div>
            )}
        </div>
    );
};

export default NavBar;
