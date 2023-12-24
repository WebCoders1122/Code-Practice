import React, { useState, useEffect } from "react";
import "./Academic_form.css";
import ThemeContext from "../Context/ThemeContext";
import { useContext } from "react";
import useDispatch from "../Hooks/useDispatch";

const initial_edu_entry = {
  degree: "",
  specialization: "",
  institute: "",
  year: "",
  marks: "",
};
const initial_ed = {
  id: "",
  degree: "",
  specialization: "",
  institute: "",
  year: "",
  marks: "",
};

const Academic_form = ({ editable_education }) => {
  const themeColor = useContext(ThemeContext);
  const dispatch = useDispatch();

  const [new_edu_entry, set_new_edu_entry] = useState(initial_edu_entry);
  const [editable, set_editable] = useState(initial_ed);
  const change_handle = (e) => {
    set_new_edu_entry({
      ...new_edu_entry,
      [e.target.name]: e.target.value,
    });
  };

  const submit_handle = (e) => {
    e.preventDefault();
    if (editable_education.id !== "") {
      dispatch.dispatch_education({ type: "update", education: new_edu_entry });
      // update_education(new_edu_entry)
      // console.log(new_edu_entry)
    } else {
      dispatch.dispatch_education({ type: "add", education: new_edu_entry });
      // add_education(new_edu_entry)
      // console.log(new_edu_entry)
    }

    set_new_edu_entry(initial_edu_entry);
  };

  if (editable_education.id !== editable.id) {
    console.log("abc");
    set_new_edu_entry(editable_education);
    set_editable(editable_education);
  }
  return (
    <form>
      <div className='inputs'>
        <input
          type='text'
          name='degree'
          placeholder='degree'
          onChange={change_handle}
          className={themeColor}
          value={new_edu_entry.degree}
        />
        <input
          type='text'
          name='specialization'
          placeholder='specialization'
          onChange={change_handle}
          className={themeColor}
          value={new_edu_entry.specialization}
        />
        <input
          type='text'
          name='institute'
          placeholder='institute'
          onChange={change_handle}
          className={themeColor}
          value={new_edu_entry.institute}
        />
        <input
          type='text'
          name='year'
          placeholder='year'
          onChange={change_handle}
          className={themeColor}
          value={new_edu_entry.year}
        />
        <input
          type='text'
          name='marks'
          placeholder='marks'
          onChange={change_handle}
          className={themeColor}
          value={new_edu_entry.marks}
        />
      </div>
      <button
        className={themeColor}
        onClick={submit_handle}>
        Add Education
      </button>
    </form>
  );
};

export default Academic_form;
