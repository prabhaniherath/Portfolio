import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

       

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}   //arrow function , empty () means dosent need parameaters , 
          aria-label="Toggle navigation"      // description of what the button does
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>Skills</a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>

          <li>
            <a href="#research" onClick={closeMenu}>Research</a>
          </li>

          <li>
            <a href="#education" onClick={closeMenu}>Education</a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

      </div>
    </nav>
  );
}

export default Navbar;