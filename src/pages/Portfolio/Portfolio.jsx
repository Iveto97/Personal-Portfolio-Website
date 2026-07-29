import { getAllProjects } from "../../services/projectService";
import CardCreator from "../../component/Card/ProjectCard";
import "./Portfolio.css";

const projects = getAllProjects();

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>
          Some of my <span>Projects</span>
        </h2>
        <hr />
        <p className="portfolio-description">
          Here are some of the projects I've worked on:
        </p>
        <div className="projects-grid">
          {projects.map(project => <CardCreator key={project.id} data={project}/>)}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
