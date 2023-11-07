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

const App = () => {

    // academic record functions
    const delete_handler = (id) => {
        console.log(id)
    };
    const edit_handler = (id) => {
        console.log('edit', id)
    };

    return (
        <>
            <div className='container'>
                <Heading class_Name='main-heading' content='Resume Data Form' />
                <Heading class_Name='sub-heading' content='Academic Records:' />
                <Academic_form />
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
                    <Table header={academic_header} data={Academic} delete_handler={delete_handler} edit_handler={edit_handler} />
                </div>
                {/* Skills Records */}
                <div>
                    <Heading class_Name='sub-heading' content='Skills:' />
                    <List data={Skills} />
                </div>
                {/* Experience Records */}
                <div>
                    <Heading class_Name='sub-heading' content='Experience:' />
                    <Table header={Experience_header} data={Experience} delete_handler={delete_handler} edit_handler={edit_handler} />
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