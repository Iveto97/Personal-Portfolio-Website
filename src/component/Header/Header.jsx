import { Link } from "react-router-dom";

import "./Header.css";

import { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";
import Hamburger from "../Hamburger/Hamburger";

export default function Header({ handleChange, isChecked }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/">
              <span>Iva</span>Krasteva
            </Link>
          </div>
          <NavLinks isOpen={isOpen} />
          <label className="mode">
            <input
              type="checkbox"
              className="dark-light"
              checked={isChecked}
              onChange={handleChange}
              id="darkModeButton"
            />
            <ion-icon name="sunny-outline" className="fa-sun"></ion-icon>
            <ion-icon name="moon-outline" className="fa-moon"></ion-icon>
          </label>

          <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger isOpen={isOpen} />
          </div>
        </nav>
      </div>
    </header>
  );
}
