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

const App = () => {
    const [education, set_education] = useState(Academic);
    const [experiences, set_experiences] = useState(Experience);

    // add education
    const add_education = (new_entry) => {
        set_education([...education, { id: education.length + 1, ...new_entry }])
        console.log(education)
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
        console.log('edit', id)
    };

    return (
        <>
            <div className='container'>
                <Heading class_Name='main-heading' content='Resume Data Form' />
                <Heading class_Name='sub-heading' content='Academic Records:' />
                <Academic_form add_education={add_education} />
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