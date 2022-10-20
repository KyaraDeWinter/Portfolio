import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Project from './components/Project/Project';
import Socials from './components/Socials/Socials';

function App() {
  return (
    <>
     <Navbar />
     <Intro />
     <About />
     <Project />
     <Socials />
    </>
  );
}

export default App;
