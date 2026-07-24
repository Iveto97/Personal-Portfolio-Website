import "./ProjectCard.css"

import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function CardCreator({ data }) {
    return (
          <div className="portfolio-box">
            <div className="portfolio-front">
              <img
                src={data.image}
                alt={data.title}
              />
            </div>
            <div className="portfolio-info">
              <h4>{data.title}</h4>
              <p>
                {data.description}
              </p>
             <div className="project-tags">
                {data.tags.map(tag => <span key={tag.name} className={tag.color}>{tag.name}</span>)}
             </div>
             <div className="project-buttons">
              <a href={data.demo} target="_blank" rel="noopener noreferrer" className="btn green"><FaEye className="btn-icon" /> View Project</a>
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="btn white"><FaGithub className="btn-icon" /> View Code</a>
             </div>
            </div>
          </div>
    )
}