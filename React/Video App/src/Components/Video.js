import './Video.css'

const Video = ({ video_data, children }) => {
    return (
        <div className='container'>
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