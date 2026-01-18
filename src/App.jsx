import Welcome from './component/Welcome/Welcome.jsx'
import Resume from './component/Resume/Resume.jsx'
import Project from './component/Project/Project.jsx'
import './App.css'
import { useRef } from 'react';
function App() {
  const resumeRef = useRef(null);
  const projectRef = useRef(null);
  return (
    <>
      <Welcome resumeRef={resumeRef} projectRef={projectRef} />
      <Resume ref={resumeRef} />
      <Project ref={projectRef} />
    </>
  )
}

export default App
