import './App.css';
import Video from './Components/Video';
import Data from './Data/Data';

function App() {
  return (
    <div className="App">
      {Data.map((video_data) => {
        return <Video video_data={video_data} />
      })}
    </div>
  );
}

export default App;
