import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Education from './components/Education';
import Services from './components/Services';

const MainRouter = () => {
    return(
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> 
                <Route path="/projects" element={<Project />} />
                <Route path="/education" element={<Education />} /> 
                <Route path="/Services" element={<Services />} /> 
            </Routes>

        </div>
    )
}

export default MainRouter;