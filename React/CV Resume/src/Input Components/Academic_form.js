import React from 'react';
import './Academic_form.css'

const Academic_form = ({ delete_education }) => {
    const change_handle = (e) => {
        console.log(e.target.name, e.target.value)
    };

    const submit_handle = (e) => {
        e.preventDefault();
        console.log('submit')
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