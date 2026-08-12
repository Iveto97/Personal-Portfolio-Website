import "./ProjectCard.css"

import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CardCreator({ data }) {
    return (
          <div className="portfolio-box" role="tabpanel" >
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
              <Link to={`/project/${data.id}`} target="_self" rel="noopener noreferrer" className="btn green"><FaEye className="btn-icon" /> View Project</Link>
              <Link to={data.github} target="_blank" rel="noopener noreferrer" className="btn white"><FaGithub className="btn-icon" /> View Code</Link>
             </div>
            </div>
          </div>
    )
}