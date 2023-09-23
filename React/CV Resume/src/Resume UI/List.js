import './List.css';

const List = ({ data }) => {
    return (
        <ul>
            {Object.values(data).map((value, index) => {
                return <li key={index}>{value}</li>
            })}
        </ul>
    )
};

export default List;