import { PostContext } from "../Context/postContext";
import { useContext } from "react";

const usePostComments = () => {
  const data = useContext(PostContext);
  return data;
};

export { usePostComments };
