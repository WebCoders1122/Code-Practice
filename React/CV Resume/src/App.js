import './App.css';
import Heading from './Resume UI/Heading';
import Information from './Resume UI/Information';
import Table from './Resume UI/Table';
import { Academic, academic_header } from './Data/Academic';
import { Experience, Experience_header } from './Data/Experience';
import List from './Resume UI/List';
import Skills from './Data/Skills';
import Hobbies from './Data/Hobbies'
import Academic_form from './Input Components/Academic_form';
import { useReducer, useState } from 'react';
import Experience_Form from './Input Components/Experience_Form';
import Hobbies_Skills_form from './Input Components/Hobbies_Skills_form';
import FontContext from './Context/FontContext';
import ToggleSwitch from './Switch';

const initial_edu_editable = {
    id: '',
    degree: '',
    specialization: '',
    institute: '',
    year: '',
    marks: ''
}
const initial_exp = {
    id: '',
    duration: '',
    company: '',
    post: ''
};

let fontData = { color: '', fontSize: '', fontStyle: '' }

const App = () => {
    const [editable_experience, set_editable_experience] = useState(initial_exp)
    const [editable_education, set_editable_education] = useState(initial_edu_editable);
    const [editable_skill, set_editable_skill] = useState({ index: '', value: '' });
    const [editable_hobby, set_editable_hobby] = useState({ index: '', value: '' });


    // Reducer to Handle education
    const education_Reducer = (education, action) => {
        switch (action.type) {
            case 'add': {
                return [...education, { id: education.length + 1, ...action.education }];
            }
            case 'update': {
                let index = education.findIndex(object => action.education.id == object.id)
                let new_edu = [...education]
                new_edu.splice(index, 1, action.education)
                set_editable_education(initial_edu_editable)
                return new_edu;
            }
            case 'delete': {
                return education.filter(edu_entry => edu_entry.id !== action.id)
            }
            default:
                { return education }
        }
    };
    const [education, dispatch_education] = useReducer(education_Reducer, Academic);

    //Reducer to handle experience
    const exp_reducer = (experiences, action) => {
        switch (action.type) {
            case 'add': {
                return [...experiences, { id: experiences.length + 1, ...action.exp }]
            }
            case 'update': {
                let index = experiences.findIndex(exp => exp.id == action.exp.id)
                let exp_array = [...experiences];
                exp_array.splice(index, 1, action.exp)
                set_editable_experience(initial_exp)
                return exp_array;
            }
            case 'delete': {
                return experiences.filter(edu_entry => edu_entry.id !== action.id)
            }
            default:
                return experiences;
        }
    };
    const [experiences, dispatch_exp] = useReducer(exp_reducer, Experience);

    // academic record functions
    const edit_handler = (id, data_name) => {
        if (data_name == 'experiences') {
            let editable_exp = experiences.find(exp_entry => exp_entry.id == id)
            set_editable_experience(editable_exp)
        } else {
            let editable_edu = education.find(edu_entry => edu_entry.id === id)
            set_editable_education(editable_edu)
        }
    };

    // Reducer for Skills and hobbies (two states in one reducer)
    const skills_hobbies = { //initial state of skills and hobbies
        skills: Skills,
        hobbies: Hobbies
    };
    const sh_reducer = (skill_hobby, action) => {
        switch (action.type) {
            case 'add_skill': {
                let index = Object.values(skill_hobby.skills).length + 1;
                let new_skills = { ...skill_hobby.skills };
                new_skills[index] = action.new_skill.value;
                return { skills: new_skills, hobbies: skill_hobby.hobbies }
            }
            case 'update_skill': {
                let new_skills = Object.values(skill_hobby.skills);
                new_skills.splice(action.value.index, 1, action.value.value);
                set_editable_skill({ index: '', value: '' })
                return { skills: new_skills, hobbies: skill_hobby.hobbies }
            }
            case 'delete_skill': {
                let new_skills = Object.values(skill_hobby.skills)
                new_skills.splice(action.index, 1)
                return { skills: new_skills, hobbies: skill_hobby.hobbies }
            }


            case 'add_hobby': {
                let index = Object.values(skill_hobby.hobbies).length + 1;
                let new_hobbies = { ...skill_hobby.hobbies };
                new_hobbies[index] = action.new_hobby.value;
                return { skills: skill_hobby.skills, hobbies: new_hobbies }
            }
            case 'update_hobby': {
                let new_hobbies = Object.values(skill_hobby.hobbies);
                new_hobbies.splice(action.value.index, 1, action.value.value);
                set_editable_hobby({ index: '', value: '' })
                return { skills: skill_hobby.skills, hobbies: new_hobbies }
            }
            case 'delete_hobby': {
                let new_hobbies = Object.values(skill_hobby.hobbies)
                new_hobbies.splice(action.index, 1)
                return { skills: skill_hobby.skills, hobbies: new_hobbies }
            }
            default:
                return skill_hobby;
        }
    };
    const [skill_hobby, dispatch_sh] = useReducer(sh_reducer, skills_hobbies);
    const [fontObj, setFontObj] = useState({ color: '', fontSize: '', fontStyle: '' });


    const edit_skills_hobbies_handler = (value, value_name, index) => {
        if (value_name === 'skills') {
            let obj = { index: index, value: value }
            set_editable_skill(obj)
        } else {
            let obj = { index: index, value: value }
            set_editable_hobby(obj)
        }
        // console.log(value, value_name, index)
    };
    const font_handler = (e) => {
        e.preventDefault();
        setFontObj(fontData)
    };
    const font_change_handler = (e) => {
        fontData = { ...fontData, [e.target.name]: e.target.value }
        console.log(fontData)
    }
    const handle_switch = (e) => {
        console.log(e.target)
    };

    return (
        <>
            <FontContext.Provider value={fontObj}>
                <div className='container2'>
                    <ToggleSwitch onChange={handle_switch}></ToggleSwitch>
                    <Heading class_Name='main-heading' content='Change Font Properties' />
                    <form>
                        <div className='space-between section'>
                            <label>Set Color</label>
                            <input type='color' name='color' onChange={font_change_handler} />
                            <label>Set Font Size</label>
                            <input type='text' name='fontSize' onChange={font_change_handler} />
                            <label>Set Font Style</label>
                            <select name='fontStyle' onChange={font_change_handler}>
                                <option>normal</option>
                                <option>italic</option>
                            </select>
                        </div>
                        <button onClick={font_handler}>Change Font Properties</button>
                    </form>
                </div>
                <div className='container2'>
                    <Heading class_Name='main-heading' content='Resume Data Form' />
                    <Heading class_Name='sub-heading' content='Academic Records:' />
                    <Academic_form dispatch_education={dispatch_education} editable_education={editable_education} />
                    <Heading class_Name='sub-heading' content='Experiences Records:' />
                    <Experience_Form dispatch_exp={dispatch_exp} editable_experience={editable_experience} />
                    <Heading class_Name='sub-heading' content='Hobbies and Skills:' />
                    <Hobbies_Skills_form
                        dispatch_sh={dispatch_sh}
                        editable_skill={editable_skill}
                        editable_hobby={editable_hobby} />
                </div>
                <div className='container'>
                    <Heading class_Name='main-heading' content='Resume of XYZ' />

                    {/* personal information */}
                    <div className='space-between section'>
                        <div>
                            <Information heading='Email' value='abc.xxxx@gmail.com' />
                            <Information heading='Any Info' value='Details' />
                        </div>
                        <div>
                            <Information heading='Address' value='House # xxxx, Near ABC road, City xxxx, Punjab, Pakisan' />
                            <Information heading='Phone #' value='0315-xxxxxxxxx' />
                        </div>
                    </div>

                    {/* Academic Records */}
                    <div>
                        <Heading class_Name='sub-heading' content='Academic Records:' />
                        <Table header={academic_header} education={education} dispatch_education={dispatch_education} edit_handler={edit_handler} />
                    </div>

                    {/* Skills Records */}
                    <div>
                        <Heading class_Name='sub-heading' content='Skills:' />
                        <List
                            data={skill_hobby.skills}
                            data_name='skills'
                            dispatch_sh={dispatch_sh}
                            edit_skills_hobbies_handler={edit_skills_hobbies_handler}
                        />
                    </div>

                    {/* Experience Records */}
                    <div>
                        <Heading class_Name='sub-heading' content='Experience:' />
                        <Table header={Experience_header} experiences={experiences} dispatch_exp={dispatch_exp} edit_handler={edit_handler} />
                    </div>

                    {/* Hobbies Records */}
                    <div>
                        <Heading class_Name='sub-heading' content='Hobbies:' />
                        <List
                            data={skill_hobby.hobbies}
                            data_name='hobbies'
                            dispatch_sh={dispatch_sh}
                            edit_skills_hobbies_handler={edit_skills_hobbies_handler} />
                    </div>

                    <button className='button' onClick={() => window.print()}>Print CV</button>
                </div>
            </FontContext.Provider>
        </>
    )
};

export default App;