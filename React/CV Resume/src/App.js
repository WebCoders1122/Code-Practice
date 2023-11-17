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
import { useState } from 'react';
import Experience_Form from './Input Components/Experience_Form';
import Hobbies_Skills_form from './Input Components/Hobbies_Skills_form';

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

const App = () => {
    const [education, set_education] = useState(Academic);
    const [experiences, set_experiences] = useState(Experience);
    const [editable_experience, set_editable_experience] = useState(initial_exp)
    const [editable_education, set_editable_education] = useState(initial_edu_editable);




    // Education
    // add education
    const add_education = (new_entry) => {
        set_education([...education, { id: education.length + 1, ...new_entry }])
        console.log('add')
        console.log(education)
    };
    //update education 
    const update_education = (new_entry) => {
        let index = education.findIndex(object => new_entry.id == object.id)
        let new_edu = [...education]
        new_edu.splice(index, 1, new_entry)
        set_education(new_edu)
        set_editable_education(initial_edu_editable)
        console.log('update')
        console.log(education, new_entry)
    };
    // academic record functions
    const delete_handler = (id, data_name) => {
        console.log(id, data_name)
        if (data_name == 'experiences') {
            set_experiences(experiences.filter(edu_entry => edu_entry.id !== id))
        } else {
            set_education(education.filter(edu_entry => edu_entry.id !== id))
        }
    };
    const edit_handler = (id, data_name) => {
        if (data_name == 'experiences') {
            let editable_exp = experiences.find(exp_entry => exp_entry.id == id)
            set_editable_experience(editable_exp)
        } else {
            let editable_edu = education.find(edu_entry => edu_entry.id === id)
            set_editable_education(editable_edu)
        }
    };

    // Experience
    // add experiece
    const add_experience = (new_experience) => {
        set_experiences([...experiences, { id: experiences.length + 1, ...new_experience }])
    };
    const update_experience = (updateable_exp) => {
        let index = experiences.findIndex(exp => exp.id == updateable_exp.id)
        let exp_array = [...experiences];
        exp_array.splice(index, 1, updateable_exp)
        set_experiences(exp_array);
        set_editable_experience(initial_exp)
    };

    return (
        <>
            <div className='container2'>
                <Heading class_Name='main-heading' content='Resume Data Form' />
                <Heading class_Name='sub-heading' content='Academic Records:' />
                <Academic_form add_education={add_education} editable_education={editable_education} update_education={update_education} />
                <Heading class_Name='sub-heading' content='Experiences Records:' />
                <Experience_Form add_experience={add_experience} editable_experience={editable_experience} update_experience={update_experience} />
                <Heading class_Name='sub-heading' content='Hobbies and Skills:' />
                <Hobbies_Skills_form />
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
                    <Table header={academic_header} education={education} delete_handler={delete_handler} edit_handler={edit_handler} />
                </div>

                {/* Skills Records */}
                <div>
                    <Heading class_Name='sub-heading' content='Skills:' />
                    <List data={Skills} />
                </div>

                {/* Experience Records */}
                <div>
                    <Heading class_Name='sub-heading' content='Experience:' />
                    <Table header={Experience_header} experiences={experiences} delete_handler={delete_handler} edit_handler={edit_handler} />
                </div>

                {/* Hobbies Records */}
                <div>
                    <Heading class_Name='sub-heading' content='Hobbies:' />
                    <List data={Hobbies} />
                </div>

                <button className='button' onClick={() => window.print()}>Print CV</button>
            </div>
        </>
    )
};

export default App;