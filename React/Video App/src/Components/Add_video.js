import React, { useState, useEffect } from 'react';
import './Add_video.css';

const editable_object = {
    id: '',
    title: '',
    views: ''
}


export const Add_video = ({ add_Video, editable_video, update_video }) => {
    const initial_object = {
        title: '',
        views: '',
        time: '1 month ago',
        channel: 'Code video School',
    };
    const [video, set_video] = useState(initial_object);
    const [editable, set_editable] = useState(editable_object);

    const handle_change = (e) => {
        set_video({
            ...video,
            [e.target.name]: e.target.value
        })
    };

    const handle_click = (e) => {
        e.preventDefault();
        if (editable_video.id !== '') {
            update_video(video)
            console.log(video)
        } else {
            add_Video(video)
        }
        set_video(initial_object)
    };

    if (editable_video.id !== editable.id) {
        set_video(editable_video)
        set_editable(editable_video)
    }

    // useEffect(() => {
    //     if (editable_video) {
    //         set_video(editable_video)
    //     }
    // }, [editable_video])
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
            <button className='submit' onClick={handle_click}> {editable_video.id ? 'Edit' : 'Add'} Video</button>
        </form>
    )
}
