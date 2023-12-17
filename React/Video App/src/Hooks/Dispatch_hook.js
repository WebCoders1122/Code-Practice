import { useContext } from "react";
import Dispatch_Context from "../Context/Dispatch_Context";

const useDispatch = () => {
  return useContext(Dispatch_Context);
};

export default useDispatch;
