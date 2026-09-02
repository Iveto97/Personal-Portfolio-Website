import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

  return (
    <>
      <section id="home" className="home">
        <div className="container">
          <div className="home-info">
            <div className="left">
              <span>Front-End Developer</span>
              <h1>Iva Krasteva</h1>
              <p>
                Hi! I'm Iva Krasteva, motivated Junior Front-End Developer with
                basic knowledge of HTML, CSS, and JavaScript. Interested in
                developing modern, responsive, and user-friendly web interfaces.
                I have experience working on small projects and a strong desire
                to grow professionally and work in a team-oriented environment. 
              </p>
              <div className="btn">
                <a href="https://drive.google.com/file/d/1L1UPa9z4R9mJ9nhHMaUfU24fLO7rOY57/view?usp=drive_link" className="infBtn" target="_blank" download="true" >Download</a>
                <Link to="/contact" className="infBtn">Hire me now</Link>
              </div>
              <div className="social">
                <div className="social-links">
                  <a href="https://www.facebook.com/profile.php?id=100002834813089" target="_blank">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a href="https://www.instagram.com/ivetoo18/" target="_blank">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a href="https://www.linkedin.com/in/iva-krasteva-5aa716151/" target="_blank">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                  <a href="https://github.com/Iveto97" target="_blank">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="profile">
                <img src="./images/portfolio-image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
