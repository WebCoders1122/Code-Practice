import './Video.css'
import PlayButton from './PlayButton';

const Video = ({ video_data, children, delete_video, edit_video }) => {
    return (
        <div className='container'>
            <button className='close' onClick={() => delete_video(video_data.id)}>x</button>
            <button className='edit' onClick={() => edit_video(video_data.id)}>Edit</button>
            <div className="pic">
                <img src='https://picsum.photos/300/200' />
            </div>
            <div className="title">{video_data.title}</div>
            <div className="channel">{video_data.channel}</div>
            <div className="views">
                {video_data.views} views <span>.</span> {video_data.time}
            </div>
            {children}
        </div>
    )
}

export default Video