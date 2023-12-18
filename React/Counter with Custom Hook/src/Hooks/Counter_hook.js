import React from "react";
import { useState } from "react";

const useCounter = (value) => {
  const [number, set_number] = useState(value);
  const increament = () => {
    set_number(number + 1);
  };
  const decreament = () => {
    set_number(number - 1);
  };
  return [number, increament, decreament];
};

export { useCounter };
