import About from "./Components/About";
import Banner from "./Components/Banner";
import Experties from "./Components/Experties";
import Footer from "./Components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
