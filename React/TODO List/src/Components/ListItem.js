import React from "react";

const ListItem = ({ tasks, dispatch }) => {
  return (
    <div className="w-1/2 m-3">
      {tasks.map((task, index) => (
        <p
          key={index}
          className="text text-left text-red-950 text-xl p-2 m-2 rounded-md flex justify-between items-center bg-slate-100 shadow-sm shadow-neutral-300"
        >
          {task}
          <span className="flex gap-3">
            <i className="fa-solid fa-pen-to-square"></i>
            <i
              className="fa-sharp fa-solid fa-trash"
              onClick={() => dispatch({ type: "Delete", payload: task })}
            ></i>
          </span>
        </p>
      ))}
    </div>
  );
};

export default ListItem;
