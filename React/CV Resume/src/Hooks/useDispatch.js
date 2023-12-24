import React, { useContext } from "react";
import DispatchContext from "../Context/DispatchContext";

const useDispatch = () => {
  const dispatch = useContext(DispatchContext);
  return dispatch;
};

export default useDispatch;
