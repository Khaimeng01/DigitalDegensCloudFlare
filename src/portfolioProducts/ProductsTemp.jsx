import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";

// Cloudflare R2 Video URLs
const r2VideoURLs = [
    "https://pub-1c372dfb59a8404ba551b6c71f8ba311.r2.dev/Video1.mp4",
    "https://pub-1c372dfb59a8404ba551b6c71f8ba311.r2.dev/Video%202.mp4",
    "https://pub-1c372dfb59a8404ba551b6c71f8ba311.r2.dev/Video%203.mp4",
    "https://pub-1c372dfb59a8404ba551b6c71f8ba311.r2.dev/Video%204.mp4",
    "https://pub-1c372dfb59a8404ba551b6c71f8ba311.r2.dev/Video%205.mp4",
    "https://pub-1c372dfb59a8404ba551b6c71f8ba311.r2.dev/Video%206.mp4",
    "https://pub-1c372dfb59a8404ba551b6c71f8ba311.r2.dev/Video%207.mp4"

];

// Photo Imports
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

// Social Media Creatives
import social1 from "../img/portfolio/Social1.jpeg";
import social2 from "../img/portfolio/Social2.jpeg";
import social3 from "../img/portfolio/Social3.jpeg";
import social4 from "../img/portfolio/Social4.jpeg";
import social5 from "../img/portfolio/Social5.jpeg";
import social6 from "../img/portfolio/Social6.jpeg";
import social7 from "../img/portfolio/Social7.jpeg";

const Appproducts = ({ title, subtitle }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [selectedVideo, setSelectedVideo] = useState(null); // Modal for video

    useEffect(() => {
        if (pathname.includes("/portfolio/")) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    // Image Collections
    const photoImages = [photo1, photo3, photo2, photo4, photo5, photo6, photo7, photo8, photo9, photo10];
    const socialImages = [social2, social3, social4, social6, social7, social5, social1];

    let content = null;

    if (title === "Videography") {
        content = (
            <div className="md:w-2/3 w-full p-5 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {r2VideoURLs.map((videoURL, index) => (
                        <div key={index} className="relative h-[732px]"> {/* Set fixed height */}
                            <video
                                src={videoURL}
                                className="object-cover w-full h-full rounded cursor-pointer"
                                controls
                                muted
                            />
                        </div>
                    ))}
                </div>
            </div>

        );
    } else {
        const images = title === "Photography" ? photoImages : socialImages;
        content = (
            <div className="md:w-2/3 w-full p-5 flex justify-center">
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
        );
    }

    return (
        <div>
            <NavBar />

            {/* MOBILE VIEW - Title on Top */}
            <div className="md:hidden flex flex-col gap-5 p-5">
                <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
                <p className="text-gray-600">{subtitle}</p>
            </div>

            <section id="about" className="w-full py-16 lg:px-32 border-b border-orange-100">
                <div className="flex flex-col md:flex-row items-start justify-center gap-10">

                    {/* Display either Videos or Images */}
                    {content}

                    {/* DESKTOP VIEW - Title on Right */}
                    <div className="hidden md:flex md:w-1/3 flex-col gap-5 p-5">
                        <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
                        <p className="mt-5 text-gray-600">{subtitle}</p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <section className="w-full py-16 lg:px-32 border-b border-orange-100">
                <Footer />
            </section>
        </div>
    );
};

export default Appproducts;
