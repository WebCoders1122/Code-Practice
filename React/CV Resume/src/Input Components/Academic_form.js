import React, { useState } from 'react';
import './Academic_form.css'


const initial_edu_entry = {
    degree: '',
    specialization: '',
    institute: '',
    year: '',
    marks: ''
};

const Academic_form = ({ add_education, editable_education }) => {
    const [new_edu_entry, set_new_edu_entry] = useState(initial_edu_entry);
    const change_handle = (e) => {
        set_new_edu_entry({
            ...new_edu_entry,
            [e.target.name]: e.target.value
        })
    };

    const submit_handle = (e) => {
        e.preventDefault();
        add_education(new_edu_entry)
        // console.log(editable_education)
        set_new_edu_entry(initial_edu_entry)

    };

    return (
        <form>
            <div className='inputs'>
                <input
                    type='text'
                    name='degree'
                    placeholder='degree'
                    onChange={change_handle}
                    value={new_edu_entry.degree}

                />
                <input
                    type='text'
                    name='specialization'
                    placeholder='specialization'
                    onChange={change_handle}
                    value={new_edu_entry.specialization}

                />
                <input
                    type='text'
                    name='institute'
                    placeholder='institute'
                    onChange={change_handle}
                    value={new_edu_entry.institute}

                />
                <input
                    type='text'
                    name='year'
                    placeholder='year'
                    onChange={change_handle}
                    value={new_edu_entry.year}

                />
                <input
                    type='text'
                    name='marks'
                    placeholder='marks'
                    onChange={change_handle}
                    value={new_edu_entry.marks}
                />
            </div>
            <button onClick={submit_handle}>Add Education</button>
        </form>
    )
}

export default Academic_form;