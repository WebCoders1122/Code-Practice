import React, { useState } from 'react';
import './Add_video.css';

export const Add_video = ({ add_Video }) => {
    const initial_object = {
        title: '',
        views: '',
        time: '1 month ago',
        channel: 'Code video School',
    };
    const [video, set_video] = useState(initial_object);
    const handle_change = (e) => {
        set_video({
            ...video,
            [e.target.name]: e.target.value
        })
    };
    const handle_click = (e) => {
        e.preventDefault();
        add_Video(video)
        set_video(initial_object)
    };
    return (
        <form>
            <input
                type='text'
                onChange={handle_change}
                placeholder='Title'
                name='title'
                value={video.title}
            />
            <input
                type='text'
                onChange={handle_change}
                placeholder='Views'
                name='views'
                value={video.views}
            />
            <button className='submit' onClick={handle_click}>Add Video</button>
        </form>
    )
}
