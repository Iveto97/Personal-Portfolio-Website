import CardCreator from "../Card/ProjectCard";
import "./Portfolio.css";

const projects = [
  {
    title: "Currency Converter",
    image: "./images/currency_converter_react.png",
    description:
      "Calculate live currency and foreign exchange rates with the currency converter.",
    github:
      "https://github.com/Iveto97/freeCodeCamp/tree/main/Front%20End%20Development%20Libraries/React/currency-converter",
    tags: [
      {
        name: "React",
        color: "tag-blue",
      },
      {
        name: "JavaScript",
        color: "tag-orange",
      },
      {
        name: "REST API",
        color: "tag-green",
      }, 
       {
        name: "CSS",
        color: "tag-purple",
      }
    ],
    },
  {
    title: "Ninom",
    image: "./images/ninom.png",
    description:
      "Browse landmarks, register, create, edit and delete your own landmarks.",
    github: "https://github.com/Iveto97/Ninom",
    tags: [
      {
        name: "React",
        color: "tag-blue",
      },
      {
        name: "Node.js",
        color: "tag-green",
      },
      {
        name: "Express",
        color: "tag-green",
      }, 
       {
        name: "MongoDB",
        color: "tag-green",
      }
    ],
  },
  {
    title: "Games Play",
    image: "./images/games-play.png",
    description:
      "Browse games, register and manage your own game collection.",
    github: "https://github.com/Iveto97/Games-Play",
    tags: [
      {
        name: "React",
        color: "tag-blue",
      },
      {
        name: "Firebase",
        color: "tag-orange",
      },
      {
        name: "Tailwind",
        color: "tag-purple",
      }, 
       {
        name: "CSS",
        color: "tag-purple",
      }
    ],
  },
];

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
          {projects.map(project => <CardCreator data={project}/>)}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
