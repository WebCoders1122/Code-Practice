import React from "react";

const useWindowsSize = () => {
  let Width = window.innerWidth;
  let Height = window.innerHeight;
  return [Width, Height];
};

export default useWindowsSize;
