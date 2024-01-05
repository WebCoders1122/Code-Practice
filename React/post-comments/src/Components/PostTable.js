import React from "react";
import Header from "./Header";
import Content from "./Content";
import "./Post.css";

const PostTable = ({ data, index, commentObject }) => {
  return (
    <>
      <thead className=''>
        <Header
          data={data}
          index={index}
        />
      </thead>
      <tbody>
        <Content
          data={data}
          index={index}
          commentObject={commentObject}
        />
      </tbody>
    </>
  );
};

export default PostTable;
