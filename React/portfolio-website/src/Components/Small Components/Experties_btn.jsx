import React from "react";

const Experties_btn = ({ title }) => {
  return (
    <button className=' bg-gray-200 inline-block  px-4 py-1 rounded-full shadow hover:bg-orange-500 hover:text-white'>
      {title}
    </button>
  );
};

export default Experties_btn;
