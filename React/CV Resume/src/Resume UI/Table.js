import { useContext, useEffect, useState } from "react";
import Row from "./Row";
import Row_body from "./Row_body";
import "./Table.css";
import ThemeContext from "../Context/ThemeContext";
import useData from "../Hooks/useData";

const Table = ({ header, edit_handler }) => {
  const [data, set_data] = useState([]);
  const data2 = useData();
  const [data_name, set_data_name] = useState("");
  const themeColor = useContext(ThemeContext);
  useEffect(() => {
    console.log(header);
    if (header.length === 4) {
      set_data(data2.experiences);
      set_data_name("experiences");
    }
    if (header.length === 6) {
      set_data(data2.education);
      set_data_name("education");
    }
  }, [data2.experiences, data2.education]);
  // console.log(header, data)
  return (
    <table>
      <thead className={themeColor}>
        <Row header={header} />
      </thead>
      <tbody className={themeColor}>
        <Row_body
          data={data}
          data_name={data_name}
          edit_handler={edit_handler}
        />
      </tbody>
    </table>
  );
};

export default Table;
