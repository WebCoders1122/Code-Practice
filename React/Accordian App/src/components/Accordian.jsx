import React, { useState } from "react";
import { data } from "../data/data";
import QAbox from "./QAbox";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const handleClick = (currentID) => {
    selected === currentID ? setSelected(null) : setSelected(currentID);
  };

  return (
    <div>
      <div className='container flex justify-center items-center flex-col gap-2 min-h-screen'>
        {data.map((obj, ind) => (
          <div
            key={ind}
            className='item_container bg-slate-50 drop-shadow-md m-2 w-1/2 text-center rounded-lg flex flex-col overflow-hidden'>
            <header className='flex justify-between items-center p-2 px-6 bg-cyan-700 text-white text-2xl '>
              <h1 className='heading'>{obj.question}</h1>
              <p
                onClick={() => handleClick(obj.id)}
                className='icon font-bold text-cyan-700 bg-white w-8 h-8 rounded-md relative'>
                <span className=' cursor-pointer absolute top-0 left-0 translate-x-1/2 -translate-y-0.5 font-bold'>
                  +
                </span>
              </p>
            </header>
            {selected === obj.id ? (
              <p className='content bg-slate-100 p-2 text-lg '>{obj.answer}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
