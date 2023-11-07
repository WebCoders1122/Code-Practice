import Row from './Row';
import Row_body from './Row_body';
import './Table.css';

const Table = ({ header, data, delete_handler, edit_handler }) => {
    // console.log(header, data)
    return (
        <table>
            <thead>
                <Row header={header} />
            </thead>
            <tbody>
                <Row_body data={data} delete_handler={delete_handler} edit_handler={edit_handler} />
            </tbody>
        </table>
    )
};

export default Table;