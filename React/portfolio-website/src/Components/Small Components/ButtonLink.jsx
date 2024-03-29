import React from "react";

const ButtonLink = ({ title, url }) => {
  return (
    <a
      className=' bg-orange-500 inline-block text-white font-bold px-4 py-1 rounded-full shadow hover:bg-slate-500 hover:shadow-inner'
      href={url}>
      {title}
    </a>
  );
};

export default ButtonLink;
