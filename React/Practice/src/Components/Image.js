import logo from '../images/image.svg';
import './Image.css';

const Image = ({ onEnter, onOut }) => {
    const increase_size = (e) => {
        e.target.style.width = onEnter;
        e.target.style.transition = '0.3s'
    };
    const decrease_size = (e) => {
        e.target.style.width = onOut
        e.target.style.transition = '0.3s'
    };
    return (
        <>
            <img src={logo} alt='Development Picture' onMouseEnter={increase_size} onMouseOut={decrease_size} />
            {/* <p>this is paragraph</p> */}
        </>
    )
};

export default Image;