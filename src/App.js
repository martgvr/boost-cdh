import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Prices from './components/Prices/Prices';
import Services from './components/Services/Services';
import Welcome from './components/Welcome/Welcome';
import Who from './components/Who/Who';

function App() {
  return (
    <>
      <Welcome />
      <About />
      <Who />
      <Services />
      <Prices />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
