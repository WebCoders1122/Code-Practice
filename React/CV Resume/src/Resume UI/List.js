import useDispatch from "../Hooks/useDispatch";
import "./List.css";

const List = ({ data, data_name, edit_skills_hobbies_handler }) => {
  const dispatch = useDispatch();
  const delete_handler = (value, index) => {
    if (data_name == "skills") {
      dispatch.dispatch_sh({ type: "delete_skill", index: index });
    } else {
      dispatch.dispatch_sh({ type: "delete_hobby", index: index });
    }
  };
  const edit_handler = (value, index) => {
    edit_skills_hobbies_handler(value, data_name, index);
  };

  return (
    <ul>
      {Object.values(data).map((value, index) => {
        return (
          <li key={index}>
            {value}
            <span className='buttons'>
              <span
                className='del'
                onClick={() => delete_handler(value, index)}>
                Delete
              </span>
              <span
                className='edit'
                onClick={() => edit_handler(value, index)}>
                Edit
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
