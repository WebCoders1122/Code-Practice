import About from "./Components/About";
import Banner from "./Components/Banner";
import Experties from "./Components/Experties";
import Header from "./Components/Header";
import Services from "./Components/Services";

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Banner />
      <About />
      <Services />
      <Experties />
    </div>
  );
}

export default App;
