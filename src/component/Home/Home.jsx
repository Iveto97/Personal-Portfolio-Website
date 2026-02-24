import { Link } from "react-router-dom";
import "./Home.css";

const CV_URL = 'http://localhost:5173/CV-eng.pdf';

function Home() {

  const downloadCV = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
  }

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
                <button onClick={() => downloadCV(CV_URL)}>Download</button>
                <Link to="/contact"><button>Hire me now</button></Link>
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
