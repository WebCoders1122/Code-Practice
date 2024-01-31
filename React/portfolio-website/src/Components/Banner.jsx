import React from "react";
import bannerImg from "../assets/sd.jpg";
import ButtonLink from "./Small Components/ButtonLink";
import backgroundImage from "../assets/banner_wallpaper.svg";
import Heading2 from "./Small Components/Heading2";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
      className='banner_container flex justify-center h-34'>
      <div className=' w-1/2 flex justify-center items-center'>
        {/* left */}
        <div className='banner_text space-y-3 w-2/3 p-4 m-3 text-white'>
          <h3 className='text-2xl'>Hi, I am</h3>
          <h1 className='text-3xl font-bold'>Habib-ur-Rehman Shakir</h1>
          <Heading2 text='I am Frontend Developer' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus
            neque praesentium voluptatum eligendi quos sunt vero possimus harum
            nobis vel nulla amet commodi rem voluptatibus sequi aperiam
            aspernatur quia labore.
          </p>
          <div className=' flex justify-start items-center space-x-2 text-2xl'>
            <a
              href='/facebook'
              className=' bg-gray-800 w-11 h-11 rounded-full border flex justify-center items-center'>
              <i class='fa-brands fa-facebook'></i>
            </a>
            <a
              href='/facebook'
              className=' bg-gray-800 w-11 h-11 rounded-full border flex justify-center items-center'>
              <i class='fa-brands fa-square-x-twitter'></i>
            </a>
            <a
              href='/facebook'
              className=' bg-gray-800 w-11 h-11 rounded-full border flex justify-center items-center'>
              <i class='fa-brands fa-linkedin'></i>
            </a>
            <a
              href='/facebook'
              className=' bg-gray-800 w-11 h-11 rounded-full border flex justify-center items-center'>
              <i class='fa-brands fa-youtube'></i>
            </a>
          </div>
          <ButtonLink
            title='Contact Me'
            url='/contact-me'
          />
        </div>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        {/* right image */}
        <img
          className='w-1/2 rounded-full shadow-lg'
          src={bannerImg}
          alt='habib-shakir'
        />
      </div>
    </div>
  );
};

export default Banner;
