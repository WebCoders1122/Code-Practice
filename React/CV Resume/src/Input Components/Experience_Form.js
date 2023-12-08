import React, { useState } from 'react';
import './Experience_Form.css';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

const initial_exp_obj = {
    post: '',
    duration: '',
    company: ''
};

const initial_editable_exp = {
    id: '',
    duration: '',
    company: '',
    post: ''
};

const Experience_Form = ({ dispatch_exp, editable_experience }) => {
    const themeColor = useContext(ThemeContext);

    const [new_experience, set_new_experience] = useState(initial_exp_obj);
    const [editable_exp, set_editable_exp] = useState(initial_editable_exp);

    const change_handle = (e) => {
        set_new_experience({ ...new_experience, [e.target.name]: e.target.value })
    };

    const submit_handle = (e) => {
        e.preventDefault()
        if (editable_exp.id !== '') {
            dispatch_exp({ type: 'update', exp: new_experience })
        } else {
            dispatch_exp({ type: 'add', exp: new_experience })
        }
        set_new_experience(initial_exp_obj)

    };
    if (editable_experience.id !== editable_exp.id) {
        set_new_experience(editable_experience);
        set_editable_exp(editable_experience)
    }

    return (
        <form>
            <div className='inputs'>
                <input
                    type='text'
                    name='post'
                    placeholder='post'
                    onChange={change_handle}
                    className={themeColor}
                    value={new_experience.post}
                />
                <input
                    type='text'
                    name='duration'
                    placeholder='duration'
                    onChange={change_handle}
                    className={themeColor}
                    value={new_experience.duration}
                />
                <input
                    type='text'
                    name='company'
                    placeholder='company'
                    onChange={change_handle}
                    className={themeColor}
                    value={new_experience.company}
                />
            </div>
            <button className={themeColor} onClick={submit_handle}>Add Experience</button>
        </form>
    )
}

export default Experience_Form