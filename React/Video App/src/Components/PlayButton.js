import React, { useState } from 'react'
import './PlayButton.css';

const PlayButton = ({ onPlay, onPause, children }) => {
    const [playID, set_playID] = useState(false);
    const handle_Click = (e) => {
        e.stopPropagation()
        playID ? onPause() : onPlay();
        set_playID(!playID)
    };
    return (
        <button onClick={handle_Click}>{children} : {playID ? '⏸️' : '⏯️'} </button>
    )
}

export default PlayButton;