import './App.css';
import { Add_video } from './Components/Add_video';
import PlayButton from './Components/PlayButton';
import Video from './Components/Video';
import Data from './Data/Data';
import { useState } from 'react';

const editable_object = {
  id: '',
  title: '',
  views: ''
}

function App() {
  const [videos, set_videos] = useState(Data);
  const [editable_video, set_editable_video] = useState(editable_object);

  const add_Video = (video) => {
    set_videos([...videos, {
      ...video, id: videos.length + 1
    }])
  };

  const delete_video = (id) => {
    set_videos(videos.filter(video => video.id !== id))
  };

  const edit_video = (id) => {
    set_editable_video(videos.find(video => video.id === id))
  };

  const update_video = (video) => {
    let index = videos.findIndex(v => v.id == video.id)
    let newVideo = [...videos]
    newVideo.splice(index, 1, video)
    set_videos(newVideo)
    set_editable_video(editable_object)
  };


  return (
    <div className="App" onClick={() => console.log('App')}>
      <Add_video
        add_Video={add_Video}
        editable_video={editable_video}
        update_video={update_video}
      ></Add_video>
      {videos.map((video_data, index) => {
        return (
          <Video
            key={index}
            video_data={video_data}
            delete_video={delete_video}
            edit_video={edit_video}
          >
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
