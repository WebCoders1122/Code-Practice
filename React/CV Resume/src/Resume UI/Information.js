import { useContext } from 'react';
import './Information.css';
import FontContext from '../Context/FontContext';
import ThemeContext from '../Context/ThemeContext';

const Information = ({ heading, value }) => {
    const fontObj = useContext(FontContext);
    const themeColor = useContext(ThemeContext);
    return (
        <>
            <p className={themeColor}>
                <span className='heading' style={fontObj}>{heading}</span>
                <span className={`mark ${themeColor}`}> : </span>
                <span className='value'>{value}</span>
            </p>
        </>
    )
};

export default Information;