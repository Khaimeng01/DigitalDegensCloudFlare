import React, { useEffect } from "react";
import team1 from "../img/team/team-1.jpg";
import team2 from "../img/team/team-2.jpg";
import team3 from "../img/team/team-3.jpg";
import team4 from "../img/team/team-4.jpg";
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
                <TeamImage image={team1} name={"Tashreen Sidhu"} role={"Partner"} />
                <TeamImage image={team2} name={"Balreen Sidhu"} role={"Partner"} />
                <TeamImage image={team3} name={"Surjit Sidhu"} role={"Partner"} />


            </div>

            <div className="pb-5"></div>

            <div className="flex flex-col justify-center xs:flex-row gap-6 p-5 lg:p-0 items-center">
                <TeamImage image={team1} name={"Prajjwal Raj Shrestha"} role={"Photography Director"} />
                <TeamImage image={team2} name={"Nurshaiza Shazlin"} role={"Associate"} />
                <TeamImage image={team3} name={"Syarifah Nurnajirah"} role={"Associate"} />


            </div>

        </div>
    );
};

export default Team;
