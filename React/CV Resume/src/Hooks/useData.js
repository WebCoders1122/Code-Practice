import React, { useContext } from "react";
import DataContext from "../Context/DataContext";

const useData = () => {
  const Data = useContext(DataContext);
  return Data;
};

export default useData;
