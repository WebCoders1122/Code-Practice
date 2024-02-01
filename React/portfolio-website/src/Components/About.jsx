import React, { useRef } from "react";
import aboutImg from "../assets/about.jpg";
import ButtonLink from "./Small Components/ButtonLink";
import Heading from "./Small Components/Heading";
import Heading2 from "./Small Components/Heading2";

const About = () => {
  return (
    <div className='about_container bg-slate-100'>
      <Heading text='About Me' />
      <div className='flex justify-center items-center'>
        <div className='picture w-1/2 flex justify-center items-center'>
          <img
            className='rounded-full shadow w-1/2 m-2'
            src={aboutImg}
            alt=''
          />
        </div>
        <div className='text w-1/2 space-y-3 mx-4 px-10'>
          <Heading2 text='And I am Frontend Developer' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            modi! Iusto omnis debitis nihil reiciendis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A soluta
            quod cumque. Aut beatae accusantium quisquam nemo iste ex esse
            pariatur, dolorum veritatis porro numquam rerum soluta, nesciunt
            ratione architecto?
          </p>
          <ButtonLink
            title='Read more...'
            url='/about-me'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
