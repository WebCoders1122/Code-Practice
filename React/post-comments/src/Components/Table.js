import React, { memo, useState } from "react";
import "./Table.css";
import Thead from "./Thead";
import Tbody from "./Tbody";

const Table = memo(function Table({ data, dataName, comments, commentShowId }) {
  console.log("Table");
  return (
    <>
      {data.map((dataObj, dataIndex) => {
        return (
          <>
            <table
              className='m-1 my-2 w-screen'
              key={dataIndex + dataName}>
              <Thead dataObj={dataObj} />
              <Tbody dataObj={dataObj} />
            </table>
            {comments.map((commentObj, commentIndex) => {
              return (
                <>
                  {comments != "[]" && commentShowId == dataObj.id ? (
                    <table
                      className='m-1 my-2 w-screen'
                      key={dataIndex + dataName}>
                      <Thead dataObj={commentObj} />
                      <Tbody dataObj={commentObj} />
                    </table>
                  ) : null}
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
});

export default Table;
