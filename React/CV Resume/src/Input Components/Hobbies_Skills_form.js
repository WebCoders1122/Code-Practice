import React, { useContext, useState } from 'react';
import './Hobbies_Skills_form.css';
import ThemeContext from '../Context/ThemeContext';

const Hobbies_Skills_form = ({ dispatch_sh, editable_skill, editable_hobby }) => {
    const themeColor = useContext(ThemeContext);
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
            dispatch_sh({ type: 'update_skill', value: new_skill })
        } else {
            dispatch_sh({ type: 'add_skill', new_skill: new_skill })
            // add_skills_hobbies_handler(new_skill, 'skills')
        }
        set_new_skill({ value: '' })
    };

    const hobbies_handler = (e) => {
        e.preventDefault();
        if (editable_hobby.index !== '') {
            dispatch_sh({ type: 'update_hobby', value: new_hobby })
        } else {
            dispatch_sh({ type: 'add_hobby', new_hobby: new_hobby })
            // add_skills_hobbies_handler(new_hobby, 'hobbies')
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
                    className={themeColor}
                    value={new_hobby.value}
                />
                <button className={`buttons ${themeColor}`} onClick={hobbies_handler}>Add Hobbies</button>
                <input
                    type='text'
                    name='skills'
                    placeholder='skills'
                    onChange={change_handler}
                    className={themeColor}
                    value={new_skill.value}
                />
                <button className={`buttons ${themeColor}`} onClick={skills_handler}>Add Skills</button>

            </div>
        </form>
    )
}

export default Hobbies_Skills_form