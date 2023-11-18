import React, { useState } from 'react';
import './Hobbies_Skills_form.css';

const Hobbies_Skills_form = ({ add_skills_hobbies_handler, editable_skill, editable_hobby, update_skills_hobbies_handler }) => {
    const [new_skill, set_new_skill] = useState({ value: '' });
    const [new_hobby, set_new_hobby] = useState({ value: '' });
    const [editable_sk, set_editable_sk] = useState({ index: '', value: '' });
    const [editable_ho, set_editable_ho] = useState({ index: '', value: '' });

    const change_handler = (e) => {
        if (e.target.name === 'skills') {
            set_new_skill({ ...new_skill, value: e.target.value })
        } else {
            set_new_hobby({ ...new_hobby, value: e.target.value })
        }
    };

    const skills_handler = (e) => {
        e.preventDefault();
        if (editable_skill.index !== '') {
            update_skills_hobbies_handler(new_skill, 'skills')
        } else {
            add_skills_hobbies_handler(new_skill, 'skills')
        }
        set_new_skill({ value: '' })
    };

    const hobbies_handler = (e) => {
        e.preventDefault();
        if (editable_hobby.index !== '') {
            update_skills_hobbies_handler(new_hobby, 'hobbies')
        } else {
            add_skills_hobbies_handler(new_hobby, 'hobbies')
        }
        set_new_hobby({ value: '' })
    };

    if (editable_skill.index !== editable_sk.index) {
        set_new_skill(editable_skill)
        set_editable_sk(editable_skill)
    }
    if (editable_hobby.index !== editable_ho.index) {
        set_new_hobby(editable_hobby)
        set_editable_ho(editable_hobby)
    }

    return (
        <form>
            <div className='inputs_hs'>
                <input
                    type='text'
                    name='hobbies'
                    placeholder='hobbies'
                    onChange={change_handler}
                    value={new_hobby.value}
                />
                <button className='buttons' onClick={hobbies_handler}>Add Hobbies</button>
                <input
                    type='text'
                    name='skills'
                    placeholder='skills'
                    onChange={change_handler}
                    value={new_skill.value}
                />
                <button className='buttons' onClick={skills_handler}>Add Skills</button>

            </div>
        </form>
    )
}

export default Hobbies_Skills_form