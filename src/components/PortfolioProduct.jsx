import React from "react";
import { FaLink } from "react-icons/fa6";
import "../index.css";



const PortfolioProduct = ({image,title}) => {
  return (
      <div className="w-full max-w-[380px] md:max-w-[420px] lg:max-w-[500px] overflow-hidden hover:cursor-pointer hover:text-orange-600 myLink">
          <img
              src={image}
              className="w-full h-fit max-h-[300px] object-cover rounded-lg transition-all duration-300 hover:opacity-50 hover:scale-110"
              alt={title}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-xl opacity-0 transition-opacity duration-300 hover:opacity-100">
              {title}
          </div>
      </div>



  );
};

export default PortfolioProduct;
