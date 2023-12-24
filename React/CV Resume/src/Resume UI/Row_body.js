import useDispatch from "../Hooks/useDispatch";
import "./Row_body.css";
const Row_body = ({ data, edit_handler, data_name }) => {
  const dispatch = useDispatch();
  return (
    <>
      {data.map((object) => {
        return (
          <tr key={object.id}>
            {Object.values(object).map((value, index) => {
              return <td key={index}>{value}</td>;
            })}
            <td className='buttons'>
              <span
                className='del'
                onClick={() => {
                  if (data_name === "experiences") {
                    dispatch.dispatch_exp({ type: "delete", id: object.id });
                  } else {
                    dispatch.dispatch_education({
                      type: "delete",
                      id: object.id,
                    });
                  }
                }}>
                Delete
              </span>
              <span
                className='edit'
                onClick={() => edit_handler(object.id, data_name)}>
                Edit
              </span>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Row_body;
