import React, { useEffect } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {


    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <div className="md:grid grid-cols-4 p-5 md:p-0  gap-4">
            <div data-aos="fade-right" className="pr-1" >
                <h1 className=" text-gray-700 text-xl  mb-3">Digital Degens</h1>
                <p className="mb-1">One Ampang Avenue,</p>
                <p className="mb-5">Ampang, Selangor</p>

                <div>
                    <p className="font-medium">
                        Phone: <span className="font-normal ml-1">+60128251933</span>
                    </p>
                    <p className="font-medium">
                        Email: <span className="font-normal ml-1">connect@digitaldegensmy.com</span>
                    </p>
                </div>
            </div>

            {/* Useful links */}
            <div data-aos="fade-right" data-aos-delay="300" className="mt-10 md:mt-0 " >
                <h1 className="text-gray-700 font-medium text-lg mb-2">
                    Useful Links
                </h1>
                <ul>
                    <li className="mb-2">
                        <a href="#" className="text-zinc-700">
                            Home
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/#about" className="text-zinc-700">
                            About Us
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/#services" className="text-zinc-700">
                            Service
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/#portfolio" className="text-zinc-700">
                            Portfolio
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/#contact" className="text-zinc-700">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            {/* Our Services */}
            <div data-aos="fade-right" data-aos-delay="500" className="mt-10 md:mt-0">
                <h1 className="text-gray-700 font-medium text-lg mb-2">
                    Our Services
                </h1>
                <ul>
                    <li className="mb-2">
                        <Link  className="text-zinc-700">
                            Social Media Management
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link  className="text-zinc-700">
                            E-Commerce Training & Consultancy
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link  className="text-zinc-700">
                            Content Creation
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link  className="text-zinc-700">
                            Photography
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link className="text-zinc-700">
                            Web Design & Development
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link className="text-zinc-700">
                            Videography
                        </Link>
                    </li>
                    
                </ul>
            </div>

            {/* Follow Us */}
            <div data-aos="fade-right" data-aos-delay="700" className="mt-10 md:mt-0">
                <h1 className="text-gray-700 font-medium text-lg mb-2">Follow Us</h1>
                {/*<p className="text-sm">*/}
                {/*    Cras fermentum odio eu feugiat lide par naso tierra videa magna derita*/}
                {/*    valies*/}
                {/*</p>*/}
                <div className="flex justify-between pr-5 mt-5">
                    {/*<div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">*/}
                    {/*    <IoLogoTwitter size={"26px"} />*/}
                    {/*</div>*/}

                    {/*<div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">*/}
                    {/*    <IoLogoFacebook size={"26px"} />*/}
                    {/*</div>*/}

                    {/*<div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">*/}
                    {/*    <IoLogoLinkedin size={"26px"} />*/}
                    {/*</div>*/}

                    <div
                        className="border border-zinc-400 p-2 rounded-full hover:border-[#C13584] hover:text-[#C13584] cursor-pointer"
                        onClick={() => window.open("https://www.instagram.com/digital_degens", "_blank")}
                    >
                        <IoLogoInstagram size={"26px"} />
                    </div>



                    <div
                        className="border border-zinc-400 p-2 rounded-full hover:border-green-600 hover:text-green-600 cursor-pointer"
                        onClick={() => window.open("https://wa.link/ydw72i", "_blank")}
                    >
                        <FaWhatsapp size={"26px"} />
                    </div>


                    <div
                        className="border border-zinc-400 p-2 rounded-full hover:border-blue-600 hover:text-blue-600 cursor-pointer"
                        onClick={() => window.location.href = "/#contact"}
                    >
                        <FaEnvelope size={"26px"} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
