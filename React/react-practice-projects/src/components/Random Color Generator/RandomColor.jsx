import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#0F0F0F");
  const [colorType, setColorType] = useState("hex");
  const hexArr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const randomColorUtility = (number) => {
    return Math.floor(Math.random() * number);
  };
  const hexColorHandler = () => {
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
      hexColor += hexArr[randomColorUtility(hexArr.length)];
    }
    setColor(hexColor);
  };

  const rgbColorHandler = () => {
    let r = randomColorUtility(255);
    let g = randomColorUtility(255);
    let b = randomColorUtility(255);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    setColor(rgb);
  };

  const generateColor = () => {
    if (colorType === "hex") {
      hexColorHandler();
    } else {
      rgbColorHandler();
    }
  };
  useEffect(() => {
    colorType === "hex" ? hexColorHandler() : rgbColorHandler();
  }, [colorType]);
  return (
    <div
      className='randomColorContainer flex flex-col justify-center items-center min-h-screen w-screen text-white'
      style={{
        backgroundColor: `${color}`,
      }}>
      <div className='color_desc text-center'>
        <h1 className='color text-black bg-slate-100 p-5 rounded-xl text-7xl font-bold'>
          {color}
        </h1>
        <p className='color_name font-bold mb-10'>
          {" "}
          {colorType === "hex" ? "HEX" : "RGB"} Color
        </p>
      </div>
      <div className='color_mode'>
        <button
          onClick={() => setColorType("hex")}
          className='hex bg-white text-black text-2xl font-bold py-2 px-5 m-3 rounded-md border'>
          HEX Color
        </button>
        <button
          onClick={() => setColorType("rgb")}
          className='rgb  bg-white text-black text-2xl font-bold py-2 px-5 m-3 rounded-md border'>
          RGB Color
        </button>
      </div>

      <button
        onClick={generateColor}
        className=' generate bg-white text-black text-3xl font-bold py-2 px-8 m-3 rounded-md border'>
        Generate Color
      </button>
    </div>
  );
};

export default RandomColor;
