import { useContext } from "react";
import "./Video.css";
import useDispatch from "../Hooks/Dispatch_hook";
import ThemeContext from "../Context/Theme_Context";

const Video = ({ video_data, children, edit_video }) => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <button
        className={`close ${theme}`}
        onClick={() => dispatch({ type: "DELETE", payload: video_data.id })}
      >
        x
      </button>
      <button
        className={`edit ${theme}`}
        onClick={() => edit_video(video_data.id)}
      >
        Edit
      </button>
      <div className="pic">
        <img src="https://picsum.photos/300/200" />
      </div>
      <div className={`title ${theme}`}>{video_data.title}</div>
      <div className={`channel ${theme}`}>{video_data.channel}</div>
      <div className={`views ${theme}`}>
        {video_data.views} views <span>.</span> {video_data.time}
      </div>
      {children}
    </div>
  );
};

export default Video;
