import React from "react";
import PostTable from "./Components/PostTable";

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen w-screen m-4'>
      <PostTable purpose='post' />
      <PostTable purpose='comments' />
    </div>
  );
};

export default App;
