import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import AboutMe from './components/About/About';
import Projects from './components/Project/Project';
import Socials from './components/Socials/Socials';

function App() {
  return (
    <>
     <Navbar />
     <Intro />
     <AboutMe />
     <Projects />
     <Socials />
    </>
  );
}

export default App;
