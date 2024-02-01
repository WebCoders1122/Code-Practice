import React from "react";
import Heading from "./Small Components/Heading";
import Heading2 from "./Small Components/Heading2";
import ButtonLink from "./Small Components/ButtonLink";

const Services = () => {
  return (
    <div className='services_container p-4 bg-slate-50'>
      <Heading text='My Services' />
      {/* services boxes */}
      <div className='flex justify-center px-5'>
        <div className='service-1 m-5 px-6 py-4 border shadow-lg bg-gray-100 rounded-md flex flex-col items-center space-y-3'>
          <i class='fa-solid fa-code text-5xl'></i>
          <Heading2 text='Web Development' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            expedita similique numquam tenetur beatae! Obcaecati maiores
            consequuntur pariatur qui, assumenda quam nihil minus perferendis
            veritatis officia. Minus voluptates commodi odio odit omnis
            blanditiis, a nulla?
          </p>
          <ButtonLink
            title='Check'
            url='/web-development'
          />
        </div>
        <div className='service-1 m-5 px-6 py-4 border shadow-lg bg-gray-100 rounded-md flex flex-col items-center space-y-3'>
          <i class='fa-brands fa-app-store-ios text-5xl'></i>
          <Heading2 text='Android App Development' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            expedita similique numquam tenetur beatae! Obcaecati maiores
            consequuntur pariatur qui, assumenda quam nihil minus perferendis
            veritatis officia. Minus voluptates commodi odio odit omnis
            blanditiis, a nulla?
          </p>
          <ButtonLink
            title='Check'
            url='/app-development'
          />
        </div>
        <div className='service-1 m-5 px-6 py-4 border shadow-lg bg-gray-100 rounded-md flex flex-col items-center space-y-3'>
          <i class='fa-solid fa-server text-5xl'></i>
          <Heading2 text='Backend Development' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            expedita similique numquam tenetur beatae! Obcaecati maiores
            consequuntur pariatur qui, assumenda quam nihil minus perferendis
            veritatis officia. Minus voluptates commodi odio odit omnis
            blanditiis, a nulla?
          </p>
          <ButtonLink
            title='Check'
            url='/backend-development'
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
