import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CtaButton from "./CtaButton";
import VideoBtn from "./VideoBtn";
import img from "../img/Test3.png";
import img2 from "../img/Logo3.jpg";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";


// aos
import AOS from "aos";
import "aos/dist/aos.css";

// import video
import video from "../img/video/funny.mp4";

const Hero = () => {
    const myElement = useRef(null);

    useEffect(() => {
        gsap.to(myElement.current, {
            duration: 2,
            y: -100,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
        });
    }, []);

    useEffect(() => {
        AOS.init();
    });

    // const [show, setShow] = useState(false);

    // const videoStartHandler = () => {
    //   const video = document.querySelector("#video");
    //   video.currentTime = 0;
    //   video.load();
    //   setShow(true);
    // };

    // const clickHandler = () => {
    //   const video = document.querySelector("#video");
    //   video.pause();
    //   setShow(false);
    // };

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-10 secondary-font relative ">
            <div
                data-aos="fade-right"
                data-aos-duration="1200"
                className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0 pt-5 lg:pt-0"
            >
                <h1 className="text-gray-900 md:text-5xl text-3xl font-semibold">
                    Empowering Businesses to Thrive Online
                </h1>
                <p className="text-xl mt-5 text-gray-600 primary-font">
                    {/* <p className="text-xl mt-5 text-blue-gray-500 primary-font"> */}
                    Digital Degens: Where marketing, e-commerce, and education converge to drive growth, optimize sales, and build future-ready brands.
                </p>
                <div className="flex flex-col sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">


                    

                    {/*<a href="https://www.instagram.com/digital_degens?igsh=MTZ0bmR1YTZ2Y3hheg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">*/}
                    {/*    <CtaButton name={"Get Started"} />*/}
                    {/*</a>*/}

                    {/* Instagram Button */}
                    <button
                        className="flex items-center gap-2 bg-[#C13584] text-white hover:bg-[#a32769] hover:shadow hover:shadow-[#a32769] text-lg rounded-3xl px-4 py-2 transition-all duration-300"
                        onClick={() => window.open("https://www.instagram.com/digital_degens", "_blank")}
                    >
                        <FaInstagram size={20} />
                        Instagram
                    </button>

                    {/* Whatsapp Button */}
                    <button
                        className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1DA851] hover:shadow hover:shadow-[#1DA851] text-lg rounded-3xl px-4 py-2 transition-all duration-300"
                        onClick={() => window.open("https://wa.link/ydw72i", "_blank")}
                    >
                        <FaWhatsapp size={20} />
                        WhatsApp
                    </button>




                    {/* <div
            onClick={() => videoStartHandler()}
            className="shadow shadow-zinc-300 hover:shadow-orange-600 hover:shadow px-4 py-2 rounded-3xl"
          >
            <VideoBtn name={"Watch Video"} />
          </div> */}
                </div>
            </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center bg-black py-16">
                {/* <img ref={myElement} className="w-full " src={img} alt="img" /> */}
                <img className="w-full " src={img2} alt="img" />

            </div>

            {/* Adding video */}
            {/* 
      <div className={`${show ? "block" : "hidden"} absolute lg:w-full lg:m-5 lg:h-full bg-zinc-500 bg-opacity-50 rounded overflow-hidden flex justify-center items-center shadow-2xl lg:mb-20 transition-all duration-300`}>
        <div onClick={()=> clickHandler()} className="absolute lg:right-10 right-2 lg:top-6 top-2 lg:px-3 px-[0.6rem] rounded-s-full lg:text-3xl text-xl font-light bg-zinc-700 rounded-full text-white cursor-pointer">
          x
        </div>
        <video id="video" muted controls autoPlay className="w-[800px] rounded" src={video}></video>
      </div> */}
        </div>
    );
};

export default Hero;
