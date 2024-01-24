import React, { useEffect, useState, useRef } from "react";

const Header = ({ data, index }) => {
  return (
    <tr key={index + "h"}>
      {Object.keys(data).map((key, i) => {
        return <td key={i}>{key}</td>;
      })}
    </tr>
  );
};

export default Header;
