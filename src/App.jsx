import Welcome from './component/Welcome/Welcome.jsx'
import Resume from './component/Resume/Resume.jsx'
import Project from './component/Project/Project.jsx'
import Contact from './component/Contact/Contact.jsx'
import Experience from './component/Experience/Experience.jsx'
import './App.css'
import { useRef } from 'react';
function App() {
  const resumeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  return (
    <>
      <Welcome resumeRef={resumeRef} projectRef={projectRef} contactRef={contactRef} experienceRef={experienceRef} />
      <Resume ref={resumeRef} />
      <Experience ref={experienceRef} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />

    </>
  )
}

export default App
