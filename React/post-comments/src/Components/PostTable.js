import React from "react";
import Header from "./Header";
import Content from "./Content";
import "./Post.css";

const PostTable = ({ data, index, comments }) => {
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
        />
      </tbody>
    </>
  );
};

export default PostTable;
