
import React, { useState } from "react";

const App = () => {

    const [watch, setWatch] = useState({
        hrs: 1,
        min: 0,
        sec: 58
    })

    const [intervalId, setIntervalId] = useState(null);


    const handleRun = () => {
        const id = setInterval(stopWatch, 1000);
        setIntervalId(id);
    }


    const stopWatch = () => {

        setWatch((watch) => {
            let newWatch = { ...watch };

            if (newWatch.sec > 58) {
                if (newWatch.min > 58) {
                    newWatch = {
                        ...newWatch,
                        hrs: newWatch.hrs + 1,
                        min: 0,
                        sec: 0
                    };
                }
                else {
                    newWatch = {
                        ...newWatch,
                        min: newWatch.min + 1,
                        sec: 0
                    }
                }
            } else {
                newWatch = {
                    ...newWatch,
                    sec: newWatch.sec + 1
                }
            }

            return newWatch;
        })
    }

    const handleStop = () => {
        window.clearInterval(intervalId);
    }

    const handleClear = () => {
        handleStop();
        setWatch({
            hrs: 0,
            min: 0,
            sec: 0
        });
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-green text-2xl">{watch.hrs < 10 ? "0" + watch.hrs : watch.hrs}:{watch.min < 10 ? "0" + watch.min : watch.min}:{watch.sec < 10 ? "0" + watch.sec : watch.sec}</h2>
            <div>
                <button onClick={handleRun}
                    className="mx-2 h-12 w-20 bg-blue-500 text-white rounded-sm shadow-lg shadow-slate-300">
                    Start
                </button>
                <button
                    className="mx-2 h-12 w-20 bg-orange-500 text-white rounded-sm shadow-lg shadow-orange-500 hover:bg-blue-500 sm:w-52"
                    onClick={handleStop}>Stop</button>
                <button
                    className="mx-2 h-12 w-20 bg-orange-500 text-white rounded-sm shadow-lg shadow-orange-500 hover:bg-blue-500 sm:w-52"
                    onClick={handleClear}>Clear</button>
            </div>
        </div>

    )
}

export default App;