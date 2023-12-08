import './Heading.css';
import ThemeContext from '../Context/ThemeContext';
import { useContext } from 'react';

const Heading = ({ class_Name, content }) => {
    const themeMode = useContext(ThemeContext);
    console.log(themeMode)
    return (
        <h3 className={class_Name}>{content}</h3>
    )
};

export default Heading;