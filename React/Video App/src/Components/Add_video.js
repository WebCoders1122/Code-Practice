import React, { useState } from 'react';
import './Add_video.css';

export const Add_video = ({ add_Video }) => {
    const [video, set_video] = useState({
        title: 'HTML introduction',
        views: '20k',
        time: '1 month ago',
        channel: 'Code video School',
    });
    const handle_change = (e) => {
        set_video({
            ...video,
            [e.target.name]: e.target.value
        })
    };
    const handle_click = (e) => {
        e.preventDefault();
        add_Video(video)
    };
    return (
        <form>
            <input
                type='text'
                onChange={handle_change}
                placeholder='Title'
                name='title'
            />
            <input
                type='text'
                onChange={handle_change}
                placeholder='Views'
                name='views'
            />
            <button onClick={handle_click}>Add Video</button>
        </form>
    )
}
