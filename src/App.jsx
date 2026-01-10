import Welcome from './component/Welcome/Welcome.jsx'
import Resume from './component/Resume/Resume.jsx'
import './App.css'
import { useRef } from 'react';
function App() {
  const resumeRef = useRef(null);
  return (
    <>
      <Welcome resumeRef={resumeRef} />
      <Resume ref={resumeRef} />
    </>
  )
}

export default App
