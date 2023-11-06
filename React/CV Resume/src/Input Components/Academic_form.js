import React from 'react';
import './Academic_form.css'

const Academic_form = () => {
    return (
        <from>
            <input
                type='text'
                name='degree'
                placeholder='degree'
            />
            <input
                type='text'
                name='specialization'
                placeholder='specialization'
            />
            <input
                type='text'
                name='institute'
                placeholder='institute'
            />
            <input
                type='text'
                name='year'
                placeholder='year'
            />
            <input
                type='text'
                name='marks'
                placeholder='marks'
            />
            <button>Add Education</button>
        </from>
    )
}

export default Academic_form