import { useContext, useEffect, useState } from 'react';
import Row from './Row';
import Row_body from './Row_body';
import './Table.css';
import ThemeContext from '../Context/ThemeContext';

const Table = ({ header, education, experiences, dispatch_education, dispatch_exp, edit_handler }) => {
    const [data, set_data] = useState([]);
    const [data_name, set_data_name] = useState('');
    const themeColor = useContext(ThemeContext);
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
            <thead className={themeColor}>
                <Row header={header} />
            </thead>
            <tbody className={themeColor}>
                <Row_body data={data} data_name={data_name} dispatch_exp={dispatch_exp} dispatch_education={dispatch_education} edit_handler={edit_handler} />
            </tbody>
        </table>
    )
};

export default Table;