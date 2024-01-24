import React, { useContext, useState, memo } from "react";
import commentContext from "../Context/CommentContext";
import commentStateContext from "../Context/CommentStateContext";

const Tbody = memo(function ({ dataObj }) {
  // console.log("tbody");
  const getComments = useContext(commentContext);
  const setComments = useContext(commentStateContext);
  const commentsOBJ = dataObj.comments;
  const handle_click = async (postid) => {
    // let postID = dataObj.id;
    // await axios.get(commentURL + postID).then((res) => set_comments(res.data));
    // setShowComment(postIndex);
    getComments(postid);
  };
  return (
    <tbody>
      <tr
        className={
          Object.keys(dataObj).length === 4 ||
          Object.keys(dataObj).includes("comments")
            ? "bg-teal-300"
            : ""
        }>
        {Object.values(dataObj).map((value, index) => {
          if (value === commentsOBJ) {
            return;
          } else {
            return (
              <td key={`postbody${index}`}>
                {value}
                {(Object.keys(dataObj).length === 4 ||
                  Object.keys(dataObj).includes("comments")) &&
                index == 3 ? (
                  <button
                    onClick={() => handle_click(dataObj.id)}
                    className='bg-sky-700 text-white p-1 px-3 rounded-sm mx-4'>
                    Show Comments
                  </button>
                ) : null}
              </td>
            );
          }
        })}
      </tr>
    </tbody>
  );
});

export default Tbody;
