import React, { useState } from 'react';
import './Experience_Form.css';

const initial_edu_obj = {
    post: '',
    duration: '',
    company: ''
};

const Experience_Form = ({ add_experience }) => {

    const [new_experience, set_new_experience] = useState(initial_edu_obj);

    const change_handle = (e) => {
        set_new_experience({ ...new_experience, [e.target.name]: e.target.value })
    };

    const submit_handle = (e) => {
        e.preventDefault()
        add_experience(new_experience)
        set_new_experience(initial_edu_obj)

    };
    return (
        <form>
            <div className='inputs'>
                <input
                    type='text'
                    name='post'
                    placeholder='post'
                    onChange={change_handle}
                    value={new_experience.post}
                />
                <input
                    type='text'
                    name='duration'
                    placeholder='duration'
                    onChange={change_handle}
                    value={new_experience.duration}
                />
                <input
                    type='text'
                    name='company'
                    placeholder='company'
                    onChange={change_handle}
                    value={new_experience.company}
                />
            </div>
            <button onClick={submit_handle}>Add Experience</button>
        </form>
    )
}

export default Experience_Form