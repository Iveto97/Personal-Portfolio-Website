import "./Project.css";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Lightbox from "../../component/Lightbox/Lightbox";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import { getProjectById } from "../../services/projectService";

import { GrLinkPrevious } from "react-icons/gr";
import { SiGithub, SiVitepress } from "react-icons/si";
import { MdOutlineOpenInNew } from "react-icons/md";
import { PiNotebookThin } from "react-icons/pi";
import { CiCircleCheck, CiStar  } from "react-icons/ci";
import { LuCodeXml } from "react-icons/lu";
import { RiLightbulbAiLine } from "react-icons/ri";
import { SlPicture } from "react-icons/sl";
import { GiPuzzle } from "react-icons/gi";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

export default function Project() {
  const { id } = useParams();
  const project = getProjectById(id);

  if(!project) {
    return (
        <section className="project-section">
            <h2>Project not found.</h2>
        </section>
    )
  }

  return (
    <section className="project-section">
      <div className="portfolio-wrapper">
        <div className="row project-summary">
          <div>
            <Link to="/portfolio" className="back-btn">
              {" "}
              <GrLinkPrevious /> Back to Projects
            </Link>
            <h1 className="title">{project.title}</h1>
            <p className="description">{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag.name} className={tag.color}>
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="btn-container">
              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  className="demo-btn"
                  target="_blank"
                  rel="noopener noreferrer">Live Demo <MdOutlineOpenInNew className="new" /></a>
              ) : <a
                  href="#"
                  className="demo-btn disabled"
                  target="_blank"
                  rel="noopener noreferrer">Live Demo <MdOutlineOpenInNew className="new" /></a>
                }
              <a
                href={project.github}
                className="repo-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <SiGithub className="git" />
                GitHub Repository
              </a>
            </div>
          </div>
          <div className="image-container">
            <img src={project.image} alt={project.title} className="img" />
          </div>
        </div>
        <div className="row project-details">
          <div className="about-wrapper info-column">
            <SectionTitle icon={<PiNotebookThin className="section-icon icon-blue" />} title="About the project" />
            <p className="about-project">{project.about}</p>

            <SectionTitle icon={ <CiCircleCheck className="section-icon icon-green" />} title="Features" />
            <ul className="features">
              {project.features.map((feature) => (
                <li key={feature} className="feature">
                  <CiCircleCheck
                    className="section-icon icon-green"
                    style={{ fontSize: "25px" }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="info-column">
             <SectionTitle icon={<LuCodeXml className="section-icon icon-orange" />} title="Technologies Used" />
            <ul className="features">
              {project.technologies.map((technology) => {
                const Icon = technology.icon;
                console.log(Icon)
                return (
                <li key={technology.name} className="technology-icons"><Icon className={`section-icon ${technology.color}`} /> {technology.name}</li>
              )
              })}
            </ul>
          </div>
          <div className="info-column">
            <SectionTitle icon={<RiLightbulbAiLine className="section-icon icon-orange" />} title="What I learned" />
            <p className="about-project">{project.knowledge}</p>
            <SectionTitle icon={<SlPicture className="section-icon icon-green" />} title="Screenshots" />
            {<Lightbox data={project.gallery} title={project.title} />}
          </div>
        </div>
        <div className="row project-evolution">
          <div className="info-column">
            <SectionTitle icon={<GiPuzzle className="section-icon icon-purple"  />} title="Challenges" />
            <p className="project-challenge">{project.challenges}</p>
          </div>
          <div>
            {" "}
            <SectionTitle icon={<CiStar className="section-icon icon-orange" />} title="Future Improvements" />
            <ul className="future">
              {project.future.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
