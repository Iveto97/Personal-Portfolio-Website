import { useState } from 'react';

import { getAllProjects } from "../../services/projectService";
import CardCreator from "../../component/Card/ProjectCard";
import "./Portfolio.css";

import { FaReact, FaJs } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

const projects = getAllProjects();



function Portfolio() {

  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjectsByCategory = (category) => {

      if (category === "all") {
        setFilteredProjects(projects);
      } else {

        setFilteredProjects(projects.filter((project) => project.category === category));
      }
  
}

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>
          Some of my <span>Projects</span>
        </h2>
        <hr className='title-line' />
        <p className="portfolio-description">
          Here are some of the projects I've worked on:
        </p>
        <div className="portfolio-navigation">
          <div role="tablist" aria-labelledby="tabs-title">
            <button role='tab' aria-controls='panel-all' aria-selected='true' id='tab-all' onClick={() => filterProjectsByCategory("all")}><CgMenuGridO className='btn-icon' /> All</button>
            <button
              role="tab"
              aria-controls="panel-javascript"
              aria-selected="false"
              id="tab-javascript"
              onClick={() =>  filterProjectsByCategory("javascript")}
            >
              <FaJs className='btn-icon'/> JavaScript
            </button>
            <button
              role="tab"
              aria-controls="panel-react"
              aria-selected="false"
              id="tab-react"
              onClick={() => filterProjectsByCategory("react")}
            >
              <FaReact className='btn-icon'/> React
            </button>
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project) => 
              <CardCreator key={project.id} data={project} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
