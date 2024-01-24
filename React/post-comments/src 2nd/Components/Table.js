import React, { useState } from "react";
import "./Table.css";
import axios from "axios";

const Table = ({ postObj, postIndex }) => {
  console.log("Table");
  const [showComment, setShowComment] = useState(0);
  const [comments, set_comments] = useState([]);
  const commentURL = "https://jsonplaceholder.typicode.com/comments?postId=";
  const handle_click = async (postIndex) => {
    let postID = postObj.id;
    await axios.get(commentURL + postID).then((res) => set_comments(res.data));
    setShowComment(postIndex);
  };
  return (
    <>
      <table
        className='m-1 my-2 w-screen'
        key={postIndex + "posts"}>
        <thead>
          <tr>
            {Object.keys(postObj).map((value, index) => {
              return <td key={`postheading${index}`}>{value}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr className='bg-teal-300'>
            {Object.values(postObj).map((value, index) => {
              return (
                <td key={`postbody${index}`}>
                  {value}
                  {Object.keys(postObj).length == 4 && index == 3 ? (
                    <button
                      onClick={() => handle_click(postIndex)}
                      className='bg-sky-700 text-white p-1 px-3 rounded-sm mx-4'>
                      Show Comments
                    </button>
                  ) : null}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      <div
        style={showComment == postIndex ? {} : { display: "none" }}
        key={postIndex + "comments"}>
        {comments.map((commentObj, comIndex) => {
          return (
            <table
              key={"comment" + comIndex}
              className='m-1 my-2 w-screen'>
              <thead>
                <tr>
                  {Object.keys(commentObj).map((value, index) => {
                    return <td key={`commentHeading${index}`}>{value}</td>;
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.values(commentObj).map((value, index) => {
                    return <td key={`commentBody${index}`}>{value}</td>;
                  })}
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
};

export default Table;
