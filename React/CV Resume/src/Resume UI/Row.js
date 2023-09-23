import './Row.css';


const Row = ({ header }) => {
    return (
        <tr>
            {header.map((heading, index) => <td key={index}>{heading}</td>)}
        </tr>
    )
};

export default Row;