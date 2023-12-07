import { useContext } from 'react';
import './Information.css';
import FontContext from '../Context/FontContext';

const Information = ({ heading, value }) => {
    const fontObj = useContext(FontContext);
    return (
        <>
            <p>
                <span className='heading' style={fontObj}>{heading}</span>
                <span className='mark'> : </span>
                <span className='value'>{value}</span>
            </p>
        </>
    )
};

export default Information;