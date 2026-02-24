import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>
          Some of my <span>Projects</span>
        </h2>
        <div className="portfolio-wrapper">
          <div className="portfolio-box">
            <div className="portfolio-front">
              <img
                src="./images/currency_converter_react.png"
                alt=""
                srcSet=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Currency Converter</h4>
              <p>
                Calculate live currency and foreign exchange rates with the currency converter.
              </p>
              <a href="https://github.com/Iveto97/freeCodeCamp/tree/main/Front%20End%20Development%20Libraries/React/currency-converter" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-6 arrow"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-wrapper">
          <div className="portfolio-box">
            <div className="portfolio-front">
              <img src="./images/ninom.png" alt="" srcSet="" />
            </div>
            <div className="portfolio-info">
              <h4>Ninom</h4>
              <p>
                The app allows visitors to browse different landmarks.
                Users can register with an email and password, which allows them to create, edit and delete 
                their own landmarks.
              </p>
              <a href="https://github.com/Iveto97/Ninom" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="size-6 arrow"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-wrapper">
          <div className="portfolio-box">
            <div className="portfolio-front">
              <img src="./images/games-play.png" alt="" srcSet="" />
            </div>
            <div className="portfolio-info">
              <h4>Games Play</h4>
              <p>
                The app allows visitors to browse different types of games,
                including the latest collections, with different levels of
                difficulty. Users can register with an email and password, which
                allows them to create, delete and edit their own games.
              </p>
              <a href="https://github.com/Iveto97/Games-Play.git" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="size-6 arrow"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
