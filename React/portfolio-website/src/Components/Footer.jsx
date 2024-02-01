import React from "react";
import { navLinks } from "../Data/links";

const Footer = () => {
  return (
    <div className='footer_container flex justify-center items-center text-center bg-slate-100 p-4 border-t-2'>
      <p className='copyright w-1/2'>
        &copy; 2023 Habib ur Rehman Shakir, All rights reserved.
      </p>
      <div className='links w-1/2 space-x-3'>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className=' hover:text-orange-700'>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
