import React, { useState } from "react";

const Content = ({ data, index, commentObject }) => {
  const [hideID, setHideID] = useState(false);
  const commentToggler = (index, e) => {
    if (hideID) {
      commentObject.setCommentDisplay("");
      setHideID(false);
    } else {
      commentObject.setCommentDisplay(index);
      setHideID(true);
    }
  };

  // console.log(data);
  return (
    <tr
      className={Object.keys(data).length == 4 ? `bg-teal-300` : ""}
      key={index + "c"}>
      {Object.values(data).map((value, i) => {
        return (
          <td key={i}>
            {value}
            {Object.keys(data).length == 4 && i == 3 ? (
              <button
                onClick={(e) => commentToggler(index, e)}
                className='bg-sky-700 text-white p-1 px-3 rounded-sm mx-4'>
                Show Comments
              </button>
            ) : null}
          </td>
        );
      })}
    </tr>
    // <tr className={dataName === "post" ? `bg-teal-300` : ""}>
    //   <td>1</td>
    //   <td>2</td>
    //   <td>ee online REST API that you can</td>
    //   <td>
    //     JSONPlaceholder is a free online REST API that you can use whenever you
    //     need some fake data. It can be
    //     <button className='bg-sky-700 text-white p-1 px-3 rounded-sm mx-3'>
    //       Show Comments
    //     </button>
    //   </td>
    // </tr>
  );
};

export default Content;
