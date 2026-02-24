import { Link } from "react-router-dom";

import "./NavLinks.css"

export default function NavLinks({ isOpen }) {

    return(
        <ul style={{left: isOpen ? "0%" : "100%"}}>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    )
}