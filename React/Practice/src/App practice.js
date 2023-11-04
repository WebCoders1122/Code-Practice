import './App.css';
import Button from './Components/Button';
import Image from './Components/Image';

const App = () => {
  return (
    <div>
      <Image onEnter='40vw' onOut='20vw' />
      <Button on_db_click={() => alert('Double Click')} on_click={() => console.log('clicked')} />
    </div>
  )
};

export default App;