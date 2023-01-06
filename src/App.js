import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Prices from './components/Prices/Prices';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <>
      <Welcome />
      <About />
      <Prices />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
