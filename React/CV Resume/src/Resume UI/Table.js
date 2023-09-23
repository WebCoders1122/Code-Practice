import Row from './Row';
import Row_body from './Row_body';
import './Table.css';

const Table = ({ header, data }) => {
    // console.log(header, data)
    return (
        <table>
            <thead>
                <Row header={header} />
            </thead>
            <tbody>
                <Row_body data={data} />
            </tbody>
        </table>
    )
};

export default Table;