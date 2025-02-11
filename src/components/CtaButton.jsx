import React from "react";

const CtaButton = ({ name }) => {
    return (
        // <button className="bg-orange-600 hover:bg-orange-500 hover:shadow hover:shadow-orange-500 text-lg text-slate-50 rounded-3xl px-4 py-2 w-fit transition-all duration-300">
        //   {name}
        // </button>

        <button className="bg-blue-400 hover:bg-blue-300 hover:shadow hover:shadow-blue-300 text-white rounded-3xl px-4 py-2 w-[153px] text-lg transition-all duration-300">
            {name}
        </button>

    );
};

export default CtaButton;
