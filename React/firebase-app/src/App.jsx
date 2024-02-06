import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { app } from "./firebase";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "user/shakir"), {
      id: 1,
      name: "shakir sb",
      age: 24,
    });
  };
  return (
    <div>
      <h1>Firebase App</h1>
      <button onClick={putData}>Put Data</button>{" "}
    </div>
  );
}

export default App;
