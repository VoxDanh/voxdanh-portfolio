import './ProjectCard.css'
function ProjectCard({ props }) {
    return (
        <div class="project-card">
            <div class="project-tags">
                <p class="project-status">Status</p>
                <p class="project-type">Type</p>
            </div>
            <img src="./src/assets/img-project/images.jpg" alt="Project Image" class="project-image" />
            <h2 class="project-title">Project Title</h2>
            <p class="project-description">This is a brief description of the project. It highlights the main features and
                objectives.</p>
            <div class="project-links-container">
                <a href="#" class="project-link nav-links-container">Learn More</a>
                <a href="#" class="project-demo nav-links-container">View Demo</a>
                <a href="#" class="project-github nav-links-container">View code</a>
                <a href="#" class="project-blog nav-links-container">Tutorial</a>
            </div>
        </div>
    )
}
export default ProjectCard;