import React from 'react'
import './Hobbies_Skills_form.css'

const Hobbies_Skills_form = () => {
    return (
        <form>
            <div className='inputs_hs'>
                <input
                    type='text'
                    name='degree'
                    placeholder='degree'
                // onChange={change_handle}
                // value={new_edu_entry.degree}
                // 
                />
                <button className='buttons'>Add Hobbies</button>
                <input
                    type='text'
                    name='degree'
                    placeholder='degree'
                // onChange={change_handle}
                // value={new_edu_entry.degree}

                />
                <button className='buttons'>Add Skills</button>

            </div>
        </form>
    )
}

export default Hobbies_Skills_form