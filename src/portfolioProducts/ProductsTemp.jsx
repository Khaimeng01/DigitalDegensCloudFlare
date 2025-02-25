import React, { useEffect } from "react";
// import app3 from "../img/portfolio/app-2.jpg";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CtaButton from "../components/CtaButton";
import { Link, useNavigate, useLocation } from "react-router-dom";
import app1 from "../img/portfolio/1.jpg";
import app2 from "../img/portfolio/app-2.jpg";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


//Photo Imports
import photo1 from "../img/portfolio/Test.jpeg";
import photo2 from "../img/portfolio/Photo_2.jpeg";
import photo3 from "../img/portfolio/Photo3.jpeg";
import photo4 from "../img/portfolio/Photo4.jpeg";
import photo5 from "../img/portfolio/Photo5.jpeg";
import photo6 from "../img/portfolio/Photo6.jpeg";
import photo7 from "../img/portfolio/Photo7.jpeg";
import photo8 from "../img/portfolio/Photo8.jpeg";
import photo9 from "../img/portfolio/Photo9.jpeg";
import photo10 from "../img/portfolio/Photo10.jpeg";




const Appproducts = ({ img,title,subtitle }) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/portfolio/photography" || pathname === "/portfolio/Videos" || pathname === "/portfolio/SocialMediaCreatives"  ) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

  let date = new Date();
  date =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    const photoImages = [photo1,photo3, photo2, photo4, photo5, photo6, photo7, photo8, photo9, photo10 ];

    let images = [];

    if (title === "Photography") {
        images = photoImages;
    }
    //else if (title === "App Two") {
    //    images = imagesSet2;
    //} else if (title === "App Three") {
    //    images = imagesSet3;
    //} else {
    //    images = [photo1]; // default or fallback images
    //}

  return (
    <div>
      <NavBar />
      <section
        id="about"
        className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100"
          >

              <div className="md:hidden flex flex-col gap-10 p-5 md:p-0">
                  <div>
                      <h1 className="text-3xl font-semibold text-gray-900">
                          {title}
                      </h1>
                      <p className="mt-5 text-gray-600">
                          {subtitle}
                      </p>
                  </div>
              </div>

              <div className="flex flex-col md:flex-row items-start justify-center gap-10">

                  {/* Images Grid */}
                  <div className="md:w-2/3 w-full p-5 md:p-0 flex justify-center items-center">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {images.map((imageSrc, index) => (
                              <img
                                  key={index}
                                  src={imageSrc}
                                  className="object-cover w-full h-full rounded cursor-pointer"
                                  alt={`photo-${index}`}
                              />
                          ))}
                      </div>
                  </div>

                  {/* Desktop Content Div (shown on desktop only) */}
                  <div className="hidden md:flex md:w-1/3 flex-col gap-10 p-5 md:p-0">
                      <div>
                          <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
                          <p className="mt-5 text-gray-600">{subtitle}</p>
                      </div>
                  </div>
              </div>



      </section>

      {/* Newletter & Footer */}
      
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Footer />
      </section>
    </div>
  );
};

export default Appproducts;


{/*<Swiper*/ }
{/*    modules={[Pagination, Autoplay, Navigation]}*/ }
{/*    spaceBetween={10}*/ }
{/*    slidesPerView={1}*/ }
{/*    pagination={{ clickable: true }}*/ }
{/*    autoplay={{ delay: 4000 }}*/ }
{/*    navigation={false}*/ }
{/*    className="rounded-lg overflow-hidden shadow-xl "*/ }
{/*>*/ }
{/*    {images.map((imageSrc, index) => (*/ }
{/*        <SwiperSlide key={index} className="flex justify-center items-center">*/ }
{/*            <img*/ }
{/*                src={imageSrc}*/ }
{/*                alt={`slide-${index}`}*/ }
{/*                //className="object-cover w-fit h-[fit] md:h-[400]"*/ }
{/*                className="object-contain w-full h-[350px] lg:h-[500px] py-1"*/ }
{/*            />*/ }
{/*        </SwiperSlide>*/ }
{/*    ))}*/ }
{/*</Swiper>*/ }


{/*                <div className="md:w-1/3 flex flex-col gap-10 p-5 md:p-0">*/ }
{/*<div className="shadow-xl border-2 p-8">*/ }
{/*  <h1 className="text-3xl font-semibold text-[#7A6960]">*/ }
{/*    Project Information*/ }
{/*  </h1>*/ }
{/*  <div className="h-[1px] mt-3 bg-slate-200"></div>*/ }
{/*  <ul className="mt-3">*/ }
{/*    <li>*/ }
{/*      <span className="font-semibold ">Category:</span> Software*/ }
{/*    </li>*/ }
{/*    <li>*/ }
{/*      <span className="font-semibold ">Client:</span> USA*/ }
{/*    </li>*/ }
{/*    <li>*/ }
{/*      <span className="font-semibold ">Project Date:</span> {date}*/ }
{/*    </li>*/ }
{/*    <li>*/ }
{/*      <span className="font-semibold ">Project Url:</span>{" "}*/ }
{/*      <span className="text-orange-600">www.example.com</span>*/ }
{/*    </li>*/ }
{/*  </ul>*/ }
{/*</div>*/ }
{/*<div>*/ }
{/*              <h1 className="text-3xl font-semibold text-gray-900">*/ }
{/*                  {title}*/ }
{/*  </h1>*/ }
{/*              <p className="mt-5 text-gray-600">*/ }
{/*                  {subtitle}*/ }
{/*  </p>*/ }
{/*          </div>*/ }


{/*<div className="flex items-center justify-center mt-3">*/ }
{/*  <Link to="/#contact" className="">*/ }
{/*    <CtaButton name={"Hire Us"} />*/ }
{/*  </Link>*/ }
{/*</div>*/ }
{/*          </div>*/ }
