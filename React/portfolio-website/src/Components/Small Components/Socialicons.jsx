import React from "react";

const Socialicons = ({ socialObj }) => {
  return (
    <a
      href={socialObj.href}
      className=' bg-gray-800 w-11 h-11 rounded-full border flex justify-center items-center'>
      {socialObj.icon}
    </a>
  );
};

export default Socialicons;
