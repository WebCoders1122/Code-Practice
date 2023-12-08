import React, { useContext } from 'react';
import './Toggle.css';
import ThemeContext from '../Context/ThemeContext';


const Toggle = ({ isChecked, changeHandler }) => {
    const themeColor = useContext(ThemeContext);
    return (
        <div className={`toggleContainer ${themeColor}`}>
            <input
                type='checkbox'
                className={`toggle ${themeColor}`}
                id='check'
                checked={!isChecked}
                onChange={changeHandler}
            />
            <label className={themeColor} htmlFor='check'>Dark Mode</label>
        </div>
    )
}

export default Toggle