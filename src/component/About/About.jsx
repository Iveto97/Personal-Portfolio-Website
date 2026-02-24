import { useState } from "react";
import "./About.css";

export default function About() {
  const [isDisplay, setIsDisplay] = useState(false);
  const [buttonText, setButtonText] = useState("Read More");

  const handleDisplayInfo = () => {
    console.log("w");

    if (isDisplay) {
      setButtonText("Read More");
      setIsDisplay(false);
    } else {
      setButtonText("Hide");
      setIsDisplay(true);
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-left">
            <img src="./images/about-image.JPG" alt="" />
          </div>
          <div className="about-right">
            <div className="about-info">
              <h2>
                About <span>Me</span>
              </h2>
              <h3>Front-End Developer</h3>
              <p>
                I enjoy building clean and responsive interfaces that focus on
                usability and accessibility. While working on my projects, I pay
                attention to structure, readable code, and consistent styling.
                My goal is not only to make a website look good, but also to
                make it intuitive and easy to use.
              </p>
              <div
                id="more-info"
                className="more-about-info"
                style={{ display: isDisplay ? "block" : "none" }}
              >
                <p>
                  Currently, I am improving my JavaScript skills and learning
                  React to better understand modern front-end architecture and
                  component-based development. I like solving problems,
                  experimenting with layouts, and turning ideas or designs into
                  real working applications.
                </p>
                <p>
                  I am a patient and detail-oriented person who enjoys learning
                  new technologies and receiving feedback. I work well
                  independently but also appreciate collaboration, code reviews,
                  and sharing knowledge within a team.
                </p>
                <p>
                  Outside of coding, I explore UI/UX design trends and practice
                  recreating interfaces to improve my visual and technical
                  skills. If you think
                </p>
                <p>
                  I could be a good fit for your team, feel free to contact me.
                </p>
              </div>

              <button id="read-more-btn" onClick={handleDisplayInfo}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
