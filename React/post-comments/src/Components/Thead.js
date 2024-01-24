import React, { memo } from "react";

const Thead = memo(function Thead({ dataObj }) {
  console.log("thead");
  return (
    <thead>
      <tr>
        {Object.keys(dataObj).map((value, index) => {
          return <td key={`postheading${index}`}>{value}</td>;
        })}
      </tr>
    </thead>
  );
});

export default Thead;
