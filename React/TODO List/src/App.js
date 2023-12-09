import React, { useReducer, useState } from "react";
import ListItem from "./Components/ListItem";
const arr = ["habib", "mansoor"];
const App = () => {
  // const [allTask, setAllTask] = useState(["habib", "mansoor"]);
  const [newTask, setNewTask] = useState("");

  const taskReducer = (allTask, action) => {
    switch (action.type) {
      case "Add":
        return [...allTask, action.payload];
      case "Delete": {
        let taskIndex = allTask.findIndex((task) => task === action.payload);
        let tasks = [...allTask];
        tasks.splice(taskIndex, 1);
        return tasks;
      }
      default:
        return allTask;
    }
  };

  const [allTask, dispatch] = useReducer(taskReducer, arr);

  const changeHandler = (event) => {
    setNewTask(event.target.value);
  };
  const submitHandler = () => {
    // setAllTask([...allTask, newTask]);
    dispatch({ type: "Add", payload: newTask });
    setNewTask("");
  };
  return (
    <div className="container bg-slate-200 h-screen	flex items-center flex-col justify-center">
      <h1 className="text text-center m-3 pb-4 p-3 text-violet-800 text-4xl font-bold border-b-2 border-violet-700 w-full">
        TODO List
      </h1>
      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Add Task"
          className="input p-2 m-2 w-80 rounded-md text-center border border-red-500"
          value={newTask}
          onChange={changeHandler}
        />
        <button
          className="text bg-red-500 text-white px-4 py-2 m-2 rounded-md hover:bg-slate-800 duration-300"
          onClick={submitHandler}
        >
          Add Task
        </button>
      </div>

      <ListItem tasks={allTask} dispatch={dispatch} />

      <div className="w-full">
        <h2 className="text text-center text-2xl text-blue-950 font-mono m-3 p-3 border-t-2 border-blue-900 w-full">
          Completed Items 0/0
        </h2>
      </div>
    </div>
  );
};

export default App;
