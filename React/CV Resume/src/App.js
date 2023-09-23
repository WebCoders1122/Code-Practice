import './App.css';
import Heading from './Resume UI/Heading';
import Information from './Resume UI/Information';
import Table from './Resume UI/Table';
import { Academic, academic_header } from './Data/Academic';
import { Experience, Experience_header } from './Data/Experience';
import List from './Resume UI/List';
import Skills from './Data/Skills';
import Hobbies from './Data/Hobbies'

const App = () => {
    return (
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
                <Table header={academic_header} data={Academic} />
            </div>
            {/* Skills Records */}
            <div>
                <Heading class_Name='sub-heading' content='Skills:' />
                <List data={Skills} />
            </div>
            {/* Experience Records */}
            <div>
                <Heading class_Name='sub-heading' content='Experience:' />
                <Table header={Experience_header} data={Experience} />
            </div>
            {/* Hobbies Records */}
            <div>
                <Heading class_Name='sub-heading' content='Hobbies:' />
                <List data={Hobbies} />

            </div>
        </div>
    )
};

export default App;