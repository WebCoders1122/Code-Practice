import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Enter Your Task Here'
        className=' border border-gray-300 rounded-md p-2 text-base w-5/12 mx-auto my-2 block'></input>
      <button className=' bg-green-600 text-white text-lg font-bold px-5 py-1 rounded-md shadow-md shadow-gray-600 hover:bg-green-700'>
        Add Task
      </button>
    </div>
  );
}

export default App;
