import './Row_body.css';
const Row_body = ({ data, delete_handler, edit_handler, data_name }) => {



    return (
        <>
            {data.map(object => {
                return <tr key={object.id}>
                    {Object.values(object).map((value, index) => {
                        return <td key={index}>{value}</td>
                    })}
                    <td className='buttons'>
                        <span className='del' onClick={() => delete_handler(object.id, data_name)}>Delete</span>
                        <span className='edit' onClick={() => edit_handler(object.id, data_name)}>Edit</span>
                    </td>
                </tr>
            })}
        </>
    )

};

export default Row_body;