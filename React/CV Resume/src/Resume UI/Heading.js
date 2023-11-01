import './Heading.css';

const Heading = ({ class_Name, content }) => {
    return (
        <h3 className={class_Name}>{content}</h3>
    )
};

export default Heading;