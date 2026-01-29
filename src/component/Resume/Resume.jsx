import './Resume.css'
import avt from '../../assets/demo-avt.jpg'
import Wrapper from './Section/Wrapper/Wrapper.jsx'
import Information from './Section/Information/Information.jsx'
import Education from './Section/Education/Education.jsx'
import Summary from './Section/Summary/Summary.jsx'
import Skills from './Section/Skills/Skills.jsx'
import FeaturedProjects from './Section/FeaturedProjects/FeaturedProjects.jsx'
import Experience from './Section/Experience/Experience.jsx'

function Resume({ ref }) {
    return (
        <>
            <article className="resume-container" ref={ref}>
                <section className="information">
                    <Wrapper className="information-wrapper" avtImg={avt}>
                        <Information />
                    </Wrapper>
                </section>
                <section className="education grid-container">
                    <Wrapper title="Education" className="education-wrapper">
                        <Education />
                    </Wrapper>
                </section>
                <section className="summary grid-container">
                    <Wrapper title="Summary" className="summary-wrapper">
                        <Summary />
                    </Wrapper>
                </section>
                <section className="skills grid-container">
                    <Wrapper title="Skills" className="skills-wrapper">
                        <Skills />
                    </Wrapper>
                </section>
                <section className="featured-projects grid-container">
                    <Wrapper title="Featured Projects" className="featured-projects-wrapper">
                        <FeaturedProjects />
                    </Wrapper>
                </section>
                <section className="experience grid-container">
                    <Wrapper title="Experience" className="experience-wrapper">
                        <Experience />
                    </Wrapper>
                </section>
            </article>
        </>
    )
}
export default Resume;