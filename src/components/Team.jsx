import React, { useEffect } from "react";
import team2 from "../img/team/team-2.jpg";
import team5 from "../img/team/team-3.jpg";
import Bal from "../img/team/Balreen.jpeg";
import Tash from "../img/team/Tash.jpeg";
import Surjit from "../img/team/Surjit.jpeg";
import Syarifah from "../img/team/Syarifah.jpeg";
import Shazlin from "../img/team/Shazlin.jpeg";
import Raj from "../img/team/Raj.jpeg";



//import team5 from "../img/team/Tashreen.jpg";


// aos
import AOS from "aos";
import "aos/dist/aos.css";

// custom styles
import "./Team.css";
import TeamImage from "./TeamImage";

const Team = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <div className="text-[#7A6960]">

            {/* <h1 data-aos="fade-right" className=" text-gray-900 text-3xl font-semibold text-center"> */}
            <h1 className=" text-gray-900 text-3xl font-semibold text-center">
                Team
            </h1>

            <div className="flex justify-center items-center mt-2">
                <div className="bg-blue-400 h-1 w-16 rounded"></div>
            </div>

            <p className="text-gray-700 text-center mt-7 mb-10 text-lg px-4 leading-relaxed">
                Meet the innovators behind Digital Degens - a team of creators, strategists, and marketers dedicated to driving your brand's success in the digital world.
            </p>




            <div className="flex flex-col justify-center xs:flex-row gap-6 p-5 lg:p-0 items-center">
                <TeamImage image={Tash} name={"Tashreen Sidhu"} role={"Partner"} />
                <TeamImage image={Bal} name={"Balreen Sidhu"} role={"Partner"} />
                <TeamImage image={Surjit} name={"Surjit Sidhu"} role={"Partner"} />


            </div>

            <div className="pb-5"></div>

            <div className="flex flex-col justify-center xs:flex-row gap-6 p-5 lg:p-0 items-center">
                <TeamImage image={Raj} name={"Prajjwal Raj Shrestha"} role={"Photography Director"} />
                <TeamImage image={Shazlin} name={"Nurshaiza Shazlin"} role={"Associate"} />
                <TeamImage image={Syarifah} name={"Syarifah Nurnajirah"} role={"Associate"} />


            </div>

        </div>
    );
};

export default Team;
