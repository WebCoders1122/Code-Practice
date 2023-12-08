import Switch from "react-switch";
import React, { Component, useState } from "react";
import './Switch.css';
import ThemeContext from "./Context/ThemeContext";

class ToggleSwitch extends Component {
    // const[themeMode, setThemeMode] = useState('lightMode');
    constructor() {
        super();
        this.themeMode = 'lightMode';
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
        if (checked === true) {
            this.themeMode = 'darkMode'
        } else {
            this.themeMode = 'lightMode'
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={this.themeMode} >
                <label className="switch">
                    <span>Dark Mode</span>
                    <Switch onChange={this.handleChange} checked={this.state.checked} />
                </label>
            </ThemeContext.Provider>
        );
    }
}

export default ToggleSwitch;