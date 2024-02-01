import React from "react";

const Heading2 = ({ text, children }) => {
  return (
    <h2 className='text-2xl font-semibold'>
      {text} {children}
    </h2>
  );
};

export default Heading2;
