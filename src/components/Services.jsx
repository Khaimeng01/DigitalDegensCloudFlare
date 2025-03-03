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
We help businesses grow, engage, and convert their audience through strategic social media management, impactful content creation, and expert e-commerce consultancy.            </p>

            {/* <p className="text-gray-700 text-justify mt-7 mb-10 text-lg">
  We help businesses scale, engage, and convert through expert social media management, high-impact content creation, and e-commerce training & consultancy.
</p> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Row 1 */}
                <Card img={<HiOutlineChartPie />} title="Social Media Management"
                    desc="We handle your brand's social media presence, crafting tailored strategies that boost engagement, drive traffic, and increase conversions. Our approach ensures consistent branding and meaningful audience connections."
                />

                <Card img={<HiOutlineChartPie />} title="E-Commerce Training & Consultancy"
                    desc="We provide expert guidance on e-commerce platforms, helping businesses scale with optimized strategies. From product listings to ad campaigns, we ensure a streamlined approach that maximizes sales potential."
                />

                <Card img={<HiOutlineChartPie />} title="Content Creation"
                    desc="We create engaging, high-quality content that captures attention and drives brand growth. From eye-catching graphics to compelling copy, our team ensures every piece aligns with your brand identity and goals."
                />

                {/* Row 2 */}
                <Card img={<HiOutlineChartPie />} title="Photography"
                    desc="We deliver professional photography that enhances your brand's image. Whether it's product, event, or corporate shoots, our visuals tell a compelling story and create a lasting impression on your audience.
"
                                
                />

                <Card img={<HiOutlineChartPie />} title="Web Design & Development"
                    desc="We design stunning, high-converting websites that elevate your brand. Our seamless layouts ensure optimal user experience, whether for e-commerce, business sites, or landing pages that drive results.
"
                />

                <Card img={<HiOutlineChartPie />} title="Videography"
                    desc="We produce captivating videos that resonate with audiences and drive engagement. From brand storytelling to promotional content, our expert cinematography ensures every frame enhances your brand's presence."
                />
            </div>


            {/*<div*/}
            {/*    className="flex flex-col lg:flex-row items-center gap-5"*/}
            {/*>*/}
            {/*    */}{/* <div onClick={() => navigate("/app-development")}> */}
            {/*    <div style={{ maxWidth: "500px" }}>*/}

            {/*        <Card*/}
            {/*            img={<HiOutlineChartPie />}*/}
            {/*            title={"Social Media Management"}*/}
            {/*            desc={*/}
            {/*                "We handle your brand's social media presence, creating strategies that boost engagement, increase followers, and drive real results."*/}
            {/*            }*/}
            {/*        />*/}
            {/*    </div>*/}

            {/*    <div style={{ maxWidth: "500px" }}>*/}
            {/*        <Card*/}
            {/*            img={<HiOutlineChartPie />}*/}
            {/*            title={"E-Commerce Training & Consultancy"}*/}
            {/*            desc={*/}
            {/*                "Master online selling with expert guidance on e-commerce platforms, helping you optimize, scale, and maximize profits."*/}
            {/*            }*/}
            {/*        />*/}
            {/*    </div>*/}

            {/*    <div style={{ maxWidth: "500px" }}>*/}
            {/*        <Card*/}
            {/*            img={<HiOutlineChartPie />}*/}
            {/*            title={"Content Creation"}*/}
            {/*            desc={*/}
            {/*                "We help you master online selling with expert guidance on e-commerce platforms, optimizing your strategy to scale and maximize profits."*/}
            {/*            }*/}
            {/*        />*/}
            {/*    </div>*/}


            {/*</div>*/}

            {/*<div*/}
            {/*    className="flex flex-col lg:flex-row items-center gap-5 pt-4"*/}
            {/*>*/}
            {/*    */}{/* <div onClick={() => navigate("/app-development")}> */}
            {/*    <div className="max-w-[100px] lg:max-w-[418px] xl:max-w-[500px] flex flex-grow">*/}


            {/*        <Card*/}
            {/*            img={<HiOutlineChartPie />}*/}
            {/*            title={"Photography"}*/}
            {/*            desc={*/}
            {/*                "We bring your vision to life with stunning, high-quality photography tailored to every need. From event and product photography to corporate shoots, professional portraits, and high-end food photography, our expert team ensures every shot tells a compelling story. With a fully equipped professional studio and a passion for visual excellence, we help elevate your brand, captivate your audience, and create lasting impressions."*/}
            {/*            }*/}
            {/*        />*/}
            {/*    </div>*/}

            {/*    <div className="max-w-[100px] lg:max-w-[418px] xl:max-w-[500px] flex flex-grow">*/}
            {/*        <Card*/}
            {/*            img={<HiOutlineChartPie />}*/}
            {/*            title={"Web Design & Development"}*/}
            {/*            desc={*/}
            {/*                "We create visually stunning, high-converting websites that align with your brand's identity. Whether it's an e-commerce store, business website, or landing page, we ensure seamless user experience and functionality to drive growth"*/}
            {/*            }*/}
            {/*        />*/}
            {/*    </div>*/}

            {/*    <div className="max-w-[100px] lg:max-w-[418px] xl:max-w-[500px] flex flex-grow">*/}

            {/*        <Card*/}
            {/*            img={<HiOutlineChartPie />}*/}
            {/*            title={"Videography"}*/}
            {/*            desc={*/}
            {/*                "We craft visually compelling videos that captivate, engage, and drive results. Whether it's event videography, promotional videos, brand storytelling, corporate shoots, product showcases, or high-quality social media content, we bring your ideas to life with professional cinematography and creative direction. Our team ensures every frame is shot with precision, delivering impactful videos that resonate with your audience and enhance your brand's presence."*/}
            {/*            }*/}
            {/*        />*/}
            {/*    </div>*/}

           




            {/*</div>*/}

            {/*<div className="flex flex-col lg:flex-row pt-5 lg:pt-3 items-center flex-wrap">*/}
            {/* Content */}

            {/*    */}{/* <div onClick={() => navigate("/app-development")}> */}
            {/*    */}{/*<div style={{ maxWidth: "383px" }}>*/}
            {/*    <div className="w-full sm:max-w-[383px]">*/}

            {/*        <Card*/}
            {/*            img={<HiOutlineChartPie />}*/}
            {/*            title={"Web Design & Development"}*/}
            {/*            desc={*/}
            {/*                "We create visually stunning, high-converting websites that align with your brand's identity. Whether it's an e-commerce store, business website, or landing page, we ensure seamless user experience and functionality to drive growth"*/}
            {/*            }*/}
            {/*        />*/}
            {/*    </div>*/}


            {/*</div>*/}
        </div>
    );
};

export default Services;
