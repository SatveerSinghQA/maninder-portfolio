// import logo from './logo.svg';/
import './App.css';
import About from './Components/About-section/About';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero-section/Hero';
import Navbar from './Components/Navbar/Navbar';
import Work from './Components/Work-section/Work';
import Videos from './Components/Work-section/Videos';

function App() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <Work/>
  <Videos/>
  <About/>
  <Contact/>
  </>
  );
}

export default App;
