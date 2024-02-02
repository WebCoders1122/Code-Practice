import React from "react";
import { navLinks } from "../Data/links";
import ButtonLink from "./Small Components/ButtonLink";

const Header = () => {
  return (
    <div className='navigation h-16 flex justify-between items-center px-10 bg-gray-100'>
      <div className='logo'>
        <a
          className=' text-xl text-orange-500 font-bold drop-shadow-md'
          href='http://localhost:5173/'>
          Habib-ur-Rehman Shakir
        </a>
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
      <ButtonLink
        title='Hire Me'
        url='/hire-me'
      />
    </div>
  );
};

export default Header;
