import React, { useEffect } from "react";
import app1 from "../img/portfolio/Cover3.png";
import app2 from "../img/portfolio/app-2.jpg";
import app3 from "../img/portfolio/app-3.jpg";
import product1 from "../img/portfolio/product-1.jpg";
import product3 from "../img/portfolio/product-3.jpg";
import branding1 from "../img/portfolio/branding-1.jpg";
import book1 from "../img/portfolio/books-1.jpg";
import book2 from "../img/portfolio/books-2.jpg";
import book3 from "../img/portfolio/books-3.jpg";
import photoIcon from "../img/portfolio/Photography.png";
import SocialIcon from "../img/portfolio/Cover1.png";
import VideosIcon from "../img/portfolio/Cover2.png";
import photoShootIcon from "../img/portfolio/photoshoot.jpg";





// aos
import AOS from "aos";
import "aos/dist/aos.css";
import PortfolioProduct from "./PortfolioProduct";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="text-[#7A6960]">
          <h1 className="heading-style">Portfolio</h1>
          <div className="flex justify-center items-center mt-2 mb-10">
              <div className="bg-blue-400 h-1 w-16 rounded"></div>
          </div>
          <p className="text-gray-700 text-center mt-7 mb-10 text-lg px-4">
              We craft high-impact videos, stunning visuals, and engaging brand stories. Check out our latest work and see how we bring ideas to life!
      </p>

      {/* Images */}
      <div className="flex flex-col justify-center items-center lg:-gap-6 gap-3 p-5 mb-10">
        {/* 1st row */}
        <div data-aos="fade-right" className="flex flex-col md:flex-row lg:-gap-6 gap-3">
                  <div onClick={() => navigate("portfolio/photography")}>
                      <PortfolioProduct image={app1} title={'Photography'} />
          </div>

                  <div onClick={() => navigate("portfolio/SocialMediaCreatives")}>
                      <PortfolioProduct image={SocialIcon} title={'Social Media Creatives'} />
          </div>

                  <div onClick={() => navigate("portfolio/Videography")}>
                      <PortfolioProduct image={VideosIcon} title={'Videography'} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
