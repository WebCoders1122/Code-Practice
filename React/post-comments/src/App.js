import React, { useEffect, useState } from "react";
import PostTable from "./Components/PostTable";
import axios, { isCancel, AxiosError } from "axios";
import { PostContext } from "./Context/postContext";
import Header from "./Components/Header";
import Content from "./Components/Content";

const App = () => {
  console.log("app");
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentDisplay, setCommentDisplay] = useState("");
  const postURL = "https://jsonplaceholder.typicode.com/posts";
  const commentsURL = "https://jsonplaceholder.typicode.com/comments";
  useEffect(() => {
    axios.get(postURL).then((response) => setPosts(response.data.slice(0, 10)));
    axios
      .get(commentsURL)
      .then((response) => setComments(response.data.slice(0, 4)));
  }, []);
  return (
    <div className='bg-gray-50 min-h-screen w-screen m-4'>
      {/* <PostContext.Provider value={{ posts, comments }}> */}
      {posts.map((object, index) => {
        return (
          <>
            <table className='m-1 my-2 w-screen'>
              <PostTable
                data={object}
                index={index}
                commentObject={{
                  commentDisplay,
                  setCommentDisplay,
                }}></PostTable>
            </table>
            <table
              className='m-1 my-2 w-screen'
              style={{
                display: commentDisplay === index ? "" : "none",
                transition: "0.5s",
              }}>
              {comments.map((obj, i) => {
                return (
                  <>
                    <Header
                      data={obj}
                      index={i}
                    />
                    <Content
                      data={obj}
                      index={i}
                    />
                  </>
                );
              })}
            </table>
          </>
        );
      })}
    </div>
  );
};

export default App;
