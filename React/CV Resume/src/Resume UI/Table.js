import { useEffect, useState } from 'react';
import Row from './Row';
import Row_body from './Row_body';
import './Table.css';

const Table = ({ header, education, experiences, delete_handler, edit_handler }) => {
    const [data, set_data] = useState([]);
    const [data_name, set_data_name] = useState('');
    useEffect(() => {
        if (experiences != null) {
            set_data(experiences)
            set_data_name('experiences')
        } if (education) {
            set_data(education)
            set_data_name('education')
        }
    }, [experiences, education])
    // console.log(header, data)
    return (
        <table>
            <thead>
                <Row header={header} />
            </thead>
            <tbody>
                <Row_body data={data} data_name={data_name} delete_handler={delete_handler} edit_handler={edit_handler} />
            </tbody>
        </table>
    )
};

export default Table;