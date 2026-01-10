import './Welcome.css'
import avt from '../../assets/demo-avt.jpg'

const scrollTo = (destinationRef) => {
    destinationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Welcome({ resumeRef }) {

    return (
        <div className="welcome-container">
            <img className="avt-img" src={avt} alt="Vox Danh Avatar" />
            <h1 className="welcome-title">Welcome to Vox Danh portfolio</h1>
            <h3 className="welcome-subtitle">What do you want to know about me?</h3>
            <ul className="welcome-nav">
                <li className="welcome-nav-item" onClick={() => scrollTo(resumeRef)}>My Resume</li>
                <li className="welcome-nav-item">My Experience</li>
                <li className="welcome-nav-item" >Contact Me</li>
                <li className="welcome-nav-item" >My Projects</li>
                <li className="welcome-nav-item" >My Blogs</li>
            </ul>
        </div>
    )
}
export default Welcome;