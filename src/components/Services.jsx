import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
    });

    // const clickHandler = () => {
    //   navigate("app-development");
    // };
    return (
        <div className="text-[#7A6960]">

            <h1 data-aos="fade-down" className="heading-style ">
                Services
            </h1>

            {/* <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div> */}

            <div className="flex justify-center items-center mt-2 mb-10">
                <div className="bg-blue-400 h-1 w-16 rounded"></div>
            </div>

            <p className="text-gray-700 text-center mt-7 mb-10 text-lg px-4">
                We help businesses scale, engage, and convert through expert social media management, high-impact content creation, and e-commerce training & consultancy.
            </p>

            {/* <p className="text-gray-700 text-justify mt-7 mb-10 text-lg">
  We help businesses scale, engage, and convert through expert social media management, high-impact content creation, and e-commerce training & consultancy.
</p> */}


            <div
                className="flex flex-col lg:flex-row items-center gap-5"
            >
                {/* <div onClick={() => navigate("/app-development")}> */}
                <div style={{ maxWidth: "500px" }}>

                    <Card
                        img={<HiOutlineChartPie />}
                        title={"Social Media Management"}
                        desc={
                            "We handle your brand's social media presence, creating strategies that boost engagement, increase followers, and drive real results."
                        }
                    />
                </div>

                <div style={{ maxWidth: "500px" }}>
                    <Card
                        img={<HiOutlineChartPie />}
                        title={"E-Commerce Training & Consultancy"}
                        desc={
                            "Master online selling with expert guidance on e-commerce platforms, helping you optimize, scale, and maximize profits."
                        }
                    />
                </div>

                <div style={{ maxWidth: "500px" }}>
                    <Card
                        img={<HiOutlineChartPie />}
                        title={"Content Creation"}
                        desc={
                            "We specialize in high-quality photography, videography, copywriting, and influencer/KOL marketing, crafting compelling content that captures attention, tells your brand story, and converts viewers into customers. From engaging social media visuals to strategic collaborations with influencers, we help amplify your reach and drive real impact."
                        }
                    />
                </div>


            </div>

            <div className="flex flex-col lg:flex-row pt-5 lg:pt-3 items-center flex-wrap">
            {/* Content */}

                {/* <div onClick={() => navigate("/app-development")}> */}
                {/*<div style={{ maxWidth: "383px" }}>*/}
                <div className="w-full sm:max-w-[383px]">

                    <Card
                        img={<HiOutlineChartPie />}
                        title={"Web Design & Development"}
                        desc={
                            "We create visually stunning, high-converting websites that align with your brand's identity. Whether it's an e-commerce store, business website, or landing page, we ensure seamless user experience and functionality to drive growth"
                        }
                    />
                </div>


            </div>
        </div>
    );
};

export default Services;
