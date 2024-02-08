import React, { useState } from "react";
import { data } from "./data/data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiMode, setMultiMode] = useState(false);
  const [multiArr, setMultiArr] = useState([]);
  const handleClick = (currentID) => {
    selected === currentID ? setSelected(null) : setSelected(currentID);
  };
  const multiModeHandler = (currentID) => {
    setSelected(null);
    let temp = [...multiArr];
    let tempIndex = temp.findIndex((item) => item == currentID);
    temp.includes(currentID) ? temp.splice(tempIndex, 1) : temp.push(currentID);
    setMultiArr(temp);
  };

  return (
    <div className='container flex justify-center items-center flex-col gap-2 min-h-screen'>
      <button
        onClick={() => {
          setMultiMode(!multiMode);
          setMultiArr([]);
          setSelected(null);
        }}
        className='multi_function text-cyan-800 py-2 px-6 rounded-lg shadow-md shadow-gray-300 bg-white font-bold text-xl border border-cyan-800'>
        Click to {multiMode ? "Disable" : "Enable"} Multimode
      </button>
      {data.map((obj, ind) => (
        <div
          key={ind}
          className='item_container bg-slate-50 drop-shadow-md m-2 w-1/2 text-center rounded-lg flex flex-col overflow-hidden'>
          <header className='flex justify-between items-center p-2 px-6 bg-cyan-700 text-white text-2xl '>
            <h1 className='heading'>{obj.question}</h1>
            <p
              onClick={
                multiMode
                  ? () => multiModeHandler(obj.id)
                  : () => handleClick(obj.id)
              }
              className='icon font-bold text-cyan-700 bg-white w-8 h-8 rounded-md relative'>
              <span className=' cursor-pointer absolute top-0 left-0 translate-x-1/2 -translate-y-0.5 font-bold'>
                +
              </span>
            </p>
          </header>
          {selected === obj.id || multiArr.includes(obj.id) ? (
            <p className='content bg-slate-100 p-2 text-lg '>{obj.answer}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
