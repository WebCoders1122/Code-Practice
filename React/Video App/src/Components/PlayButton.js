import React, { useContext, useState } from 'react'
import './PlayButton.css';
import ThemeContext from '../Context/Theme_Context';

const PlayButton = ({ onPlay, onPause, children }) => {
    const theme = useContext(ThemeContext);
    const [playID, set_playID] = useState(false);
    const handle_Click = (e) => {
        e.stopPropagation()
        playID ? onPause() : onPlay();
        set_playID(!playID)
    };
    return (
        <button className={theme} onClick={handle_Click}>{children} : {playID ? '⏸️' : '⏯️'} </button>
    )
}

export default PlayButton;