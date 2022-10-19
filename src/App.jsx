import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Project from './components/Project/Project'

function App() {
  return (
    <>
     <Navbar />
     <Intro />
     <Project />
    </>
  );
}

export default App;
