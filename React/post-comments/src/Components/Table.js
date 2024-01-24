import React, { memo, useState } from "react";
import "./Table.css";
import Thead from "./Thead";
import Tbody from "./Tbody";

const Table = memo(function Table({ data, dataName, commentShowId }) {
  // console.log("Table");
  return (
    <>
      {data.map((dataObj, dataIndex) => {
        return (
          <>
            <table
              className='m-1 my-2 w-screen'
              key={dataIndex + dataName}>
              <Thead
                dataObj={dataObj}
                dataName={"post"}
              />
              <Tbody dataObj={dataObj} />
            </table>
            {dataObj.comments
              ? dataObj.comments.map((commentObj, commentIndex) => {
                  return (
                    <table
                      style={
                        commentShowId == dataObj.id ? {} : { display: "none" }
                      }
                      className='m-1 my-2 w-screen'
                      key={dataIndex + "comments"}>
                      <Thead dataObj={commentObj} />
                      <Tbody dataObj={commentObj} />
                    </table>
                  );
                })
              : null}
          </>
        );
      })}
    </>
  );
});

export default Table;
