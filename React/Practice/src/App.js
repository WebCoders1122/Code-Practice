import React from "react";
import List_item from "./Components/List_item";

const items = ["apple", "banana", "grapes", "orange", "guava"];

const App = () => {
  console.log("app");
  return (
    <div>
      <ul>
        {items.map((item) => (
          <List_item item={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;
