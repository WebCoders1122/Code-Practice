import Switch from "react-switch";
import React, { Component, useState } from "react";
import './Switch.css';

class ToggleSwitch extends Component {
    // const[themeMode, setThemeMode] = useState('lightMode');
    constructor() {
        super();
        this.state = {
            checked: false,
            themeMode: 'lightMode'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
        if (checked === true) {
            this.state.themeMode = 'darkMode'
        } else {
            this.state.themeMode = 'lightMode'
        }
    }

    render() {
        return (
            <label className="switch">
                <span>Dark Mode</span>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
            </label>
        );
    }
}

const theme = new ToggleSwitch();
let themeMode = theme.state.themeMode
console.log(themeMode)

export { ToggleSwitch, themeMode };