
import './App.css';
import  AboutMe  from './Pages/AboutMe';
import  Home  from './Pages/Home';
import  Contact  from './Pages/Contact';
import  Projects  from './Pages/Projects';
import  Skills  from './Pages/Skills';
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;