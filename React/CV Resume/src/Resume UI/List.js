import './List.css';

const List = ({ data }) => {

    const delete_handler = () => {

    };

    const edit_handler = () => {

    };
    return (
        <ul>
            {Object.values(data).map((value, index) => {
                return <li key={index}>
                    {value}
                    <span className='buttons'>
                        <span className='del' onClick={() => delete_handler()}>Delete</span>
                        <span className='edit' onClick={() => edit_handler()}>Edit</span>
                    </span>
                </li>
            })}
        </ul>
    )
};

export default List;