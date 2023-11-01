import './Video.css'

const Video = () => {
    return (
        <div className='container'>
            <div className="pic">
                <img src='https://picsum.photos/300/200' />
            </div>
            <div className="title">{'thisis title of the post'}</div>
            <div className="channel">{'this is channel'}</div>
            <div className="views">
                {'this sd'} views <span>.</span> {'sdfsd'}
            </div>
        </div>
    )
}

export default Video