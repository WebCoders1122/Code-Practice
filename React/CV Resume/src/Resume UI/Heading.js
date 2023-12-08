import './Heading.css';
import ThemeContext from '../Context/ThemeContext';
import { useContext } from 'react';

const Heading = ({ class_Name, content }) => {
    const themeColor = useContext(ThemeContext);
    const combinedClass = class_Name + ' ' + themeColor;
    return (
        <h3 className={combinedClass}>{content}</h3>
    )
};

export default Heading;