import React from "react";
import Header from "./Header";
import Content from "./Content";
import "./Post.css";

const PostTable = ({ purpose }) => {
  return (
    <table className='m1'>
      <thead className=''>
        <Header />
      </thead>
      <tbody>
        <Content purpose={purpose} />
      </tbody>
    </table>
  );
};

export default PostTable;
