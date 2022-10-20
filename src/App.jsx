import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import AboutMe from './components/About/About';
import Projects from './components/Project/Project';
import Socials from './components/Socials/Socials';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
     <Navbar />
     <Intro />
     <AboutMe />
     <Projects />
     <Socials />
     <ScrollToTop />
    </>
  );
}

export default App;
