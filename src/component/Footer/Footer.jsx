import { Link } from "react-router-dom";

import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-info">
            <p>Copyright &copy; all right reserved</p>
          </div>
          <div className="iconTop">
            <Link to="/">
              <ion-icon name="arrow-up-outline"></ion-icon>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
