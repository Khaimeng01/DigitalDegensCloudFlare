import React from "react";
import { FaLink } from "react-icons/fa6";
import "../index.css";



const PortfolioProduct = ({image,title}) => {
  return (
    <div className="w-[26rem] overflow-hidden hover:cursor-pointer hover:text-orange-600 myLink">
      <img
        src={image}
        className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-50 hover:scale-110"
        alt="phone"
          />
          {/*<video*/}
          {/*    src={videoSrc}*/}
          {/*    className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-50 hover:scale-110"*/}
          {/*    controls*/}
          {/*    muted*/}
          {/*    loop*/}
          {/*    autoPlay*/}
          {/*/>*/}
      {/*<div className="link">*/}
      {/*  <FaLink size={"45px"} />*/}
      {/*    </div>*/}

          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-xl opacity-0 transition-opacity duration-300 hover:opacity-100">
              {title}
          </div>
    </div>
  );
};

export default PortfolioProduct;
