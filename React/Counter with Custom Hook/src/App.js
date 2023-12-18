import { useCounter } from "./Hooks/Counter_hook";

export default function App() {
  const [count, increament, decreament] = useCounter(0);
  return (
    <div className=" flex justify-center items-center flex-col rounded w-full min-h-screen">
      <p className="bg-slate-100 w-1/4 text-center p-1 text-4xl text-blue-700 font-bold ">
        {count}
      </p>
      <div>
        <button
          onClick={increament}
          className=" bg-green-600 rounded border border-green-600 px-4 py-1 text-white hover:text-green-600 text-xl m-1 font-semibold hover:bg-white hover:border-green-600 transition duration-300"
        >
          Increament
        </button>
        <button
          onClick={decreament}
          className=" bg-red-600 rounded border border-red-600 px-4 py-1 text-white hover:text-red-600 text-xl m-1 font-semibold hover:bg-white hover:border-red-600 transition duration-300"
        >
          Deceament
        </button>
      </div>
    </div>
  );
}
