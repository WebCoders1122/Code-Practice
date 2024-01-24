import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import Table from "./Components/Table";
import commentContext from "./Context/CommentContext";
import commentStateContext from "./Context/CommentStateContext";

const App = () => {
  console.log("app");
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentShowId, setCommentShowId] = useState(0);
  const postURL = "https://jsonplaceholder.typicode.com/posts";
  const commentsURL = "https://jsonplaceholder.typicode.com/comments?postId=";

  useEffect(() => {
    axios.get(postURL).then((res) => setPosts(res.data.slice(0, 10)));
  }, []);

  const getComments = async (postID) => {
    // console.log("getComments", postID);
    let index = posts.findIndex((post) => post.id == postID);
    if (!posts[index].comments) {
      const res = await axios.get(commentsURL + postID);
      let newPosts = [...posts];
      newPosts.splice(index, 1, { ...posts[index], comments: res.data });
      setPosts([...newPosts]);
    }
    setCommentShowId(postID);
    console.log(posts);
  };

  return (
    <commentContext.Provider value={getComments}>
      <div className='bg-gray-50 min-h-screen w-screen m-4'>
        <Table
          data={posts}
          dataName={"posts"}
          commentShowId={commentShowId}
        />
        {/* {posts.map((postObj, postIndex) => {
          return (
            <>
              <Table
                dataObj={postObj}
                dataIndex={postIndex}
              />
              {comments != "[]" && postObj.id === commentShowId ? (
                <div>
                  {comments.map((commentObj, commentIndex) => {
                    return (
                      <>
                        <Table
                          dataObj={commentObj}
                          dataIndex={commentIndex}
                        />
                      </>
                    );
                  })}
                </div>
              ) : null}
            </>
          );
        })} */}
      </div>
    </commentContext.Provider>
  );
};

export default App;
