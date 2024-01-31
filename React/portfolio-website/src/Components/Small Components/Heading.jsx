import React from "react";

const Heading = ({ text }) => {
  return (
    <h1 className='text-3xl text-center underline pt-3 mb-2 font-semibold'>
      {text}
    </h1>
  );
};

export default Heading;
