import React, { useState } from 'react';
import './Academic_form.css'


const initial_edu_entry = {
    degree: '',
    specialization: '',
    institute: '',
    year: '',
    marks: ''
};

const Academic_form = ({ add_education }) => {
    const [new_edu_entry, set_new_edu_entry] = useState({
        degree: '-',
        specialization: '-',
        institute: '-',
        year: '-',
        marks: '-'
    });
    const change_handle = (e) => {
        set_new_edu_entry({
            ...new_edu_entry,
            [e.target.name]: e.target.value
        })
    };

    const submit_handle = (e) => {
        e.preventDefault();
        add_education(new_edu_entry)
    };

    return (
        <form>
            <div className='inputs'>
                <input
                    type='text'
                    name='degree'
                    placeholder='degree'
                    onChange={change_handle}

                />
                <input
                    type='text'
                    name='specialization'
                    placeholder='specialization'
                    onChange={change_handle}

                />
                <input
                    type='text'
                    name='institute'
                    placeholder='institute'
                    onChange={change_handle}

                />
                <input
                    type='text'
                    name='year'
                    placeholder='year'
                    onChange={change_handle}

                />
                <input
                    type='text'
                    name='marks'
                    placeholder='marks'
                    onChange={change_handle}
                />
            </div>
            <button onClick={submit_handle}>Add Education</button>
        </form>
    )
}

export default Academic_form;