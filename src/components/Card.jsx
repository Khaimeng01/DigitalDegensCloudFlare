import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, desc, img}) => {
  return (
    // <a href={url}>
      <div className="bg-white lg:min-w-3/12  lg:min-h-[350px]  min-h-[410px] p-10 rounded mx-5 lg:m-0 hover:text-orange-600  cursor-pointer shadow-2xl"
>
          <div style={{ color: "#60A5FA", fontSize: "36px" }}>{img}</div>

          <h1 className="lg:text-xl text-lg font-semibold text-gray-700 mt-3 mb-5 lg:min-h-[56px]">{title}</h1>
          <p className="lg:text-[0.9rem] text-[0.8rem] text-zinc-700 leading-loose text-justify">{desc}</p>

      </div>
    // </a>
  );
};

export default Card;
