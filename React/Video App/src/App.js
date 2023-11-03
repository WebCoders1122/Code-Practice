import './App.css';
import { Add_video } from './Components/Add_video';
import { PlayButton } from './Components/PlayButton';
import Video from './Components/Video';
import Data from './Data/Data';
import { useState } from 'react';


function App() {
  const [videos, set_videos] = useState(Data);

  const add_Video = (video) => {
    set_videos([...videos, {
      ...video, id: videos.leb
        + 1
    }])
  };


  return (
    <div className="App" onClick={() => console.log('App')}>
      <Add_video add_Video={add_Video}></Add_video>
      {videos.map((video_data, index) => {
        return (
          <Video
            key={index}
            video_data={video_data}>
            <PlayButton
              onPlay={() => console.log('playing')}
              onPause={() => console.log('Paused')}
            >{video_data.title}</PlayButton>
          </Video>
        )
      })}
    </div>
  );
}

export default App;
