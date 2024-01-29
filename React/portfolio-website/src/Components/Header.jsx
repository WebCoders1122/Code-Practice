import React from "react";
import { navLinks } from "../Data/links";

const Header = () => {
  return (
    <div className='navigation h-16 flex justify-between items-center px-10 bg-gray-100'>
      <div className='logo'>
        <h1 className=' text-xl text-orange-500 font-bold drop-shadow-md'>
          Habib-ur-Rehman Shakir
        </h1>
      </div>
      <div className='links space-x-4 font-medium'>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className=' hover:text-orange-700'>
            {link.title}
          </a>
        ))}
        {/* <a
          href='about'
          className='hover:text-orange-700'>
          About
        </a>
        <a
          href='skills'
          className='hover:text-orange-700'>
          Skills
        </a>
        <a
          href='portfolio'
          className='hover:text-orange-700'>
          Portfolio
        </a>
        <a
          href='contact'
          className='hover:text-orange-700'>
          Contact
        </a> */}
      </div>
      <div className='button bg-orange-500 text-white font-bold px-4 py-1 rounded-full shadow'>
        <button className='hire'>Hire Me</button>
      </div>
    </div>
  );
};

export default Header;
