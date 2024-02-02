import React from "react";
import Heading2 from "./Heading2";
import ButtonLink from "./ButtonLink";

const ServiceBox = ({ dataObj }) => {
  return (
    <>
      <div className='service-1 m-5 px-6 py-4 border shadow-lg bg-gray-100 rounded-md flex flex-col items-center space-y-3'>
        <i className='fa-solid fa-code text-5xl'></i>
        <Heading2 text={dataObj.heading} />
        <p>{dataObj.paragraph}</p>
        <ButtonLink
          title='check'
          url={dataObj.linkUrl}
        />
      </div>
    </>
  );
};

export default ServiceBox;
