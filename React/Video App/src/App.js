import "./App.css";
import { Add_video } from "./Components/Add_video";
import PlayButton from "./Components/PlayButton";
import Video from "./Components/Video";
import ThemeContext from "./Context/Theme_Context";
import Dispatch_Context from "./Context/Dispatch_Context";
import Data from "./Data/Data";
import { useReducer, useState, useContext } from "react";

const editable_object = {
  id: "",
  title: "",
  views: "",
};

function App() {
  const [editable_video, set_editable_video] = useState(editable_object);
  const [mode, setMode] = useState("lightMode");

  const videoReducer = (videos, action) => {
    switch (action.type) {
      case "ADD":
        return [
          ...videos,
          {
            ...action.payload,
            id: videos.length + 1,
          },
        ];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        let index = videos.findIndex((v) => v.id == action.payload.id);
        let newVideo = [...videos];
        newVideo.splice(index, 1, action.payload);
        set_editable_video(editable_object);
        return newVideo;
      default:
        return videos;
    }
  };
  const [videos, dispatch] = useReducer(videoReducer, Data);
  const edit_video = (id) => {
    set_editable_video(videos.find((video) => video.id === id));
  };
  return (
    <ThemeContext.Provider value={mode}>
      <Dispatch_Context.Provider value={dispatch}>
        <div
          className={`App ${mode}`}
          onClick={() => console.log("App")}>
          <button
            className={mode}
            onClick={() =>
              setMode(mode === "lightMode" ? "darkMode" : "lightMode")
            }>
            Switch Mode
          </button>
          <Add_video editable_video={editable_video}></Add_video>
          {videos.map((video_data, index) => {
            return (
              <Video
                key={index}
                video_data={video_data}
                edit_video={edit_video}>
                <PlayButton
                  onPlay={() => console.log("playing")}
                  onPause={() => console.log("Paused")}>
                  {video_data.title}
                </PlayButton>
              </Video>
            );
          })}
        </div>
      </Dispatch_Context.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
