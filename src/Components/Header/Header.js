import React from 'react';
import { Link } from 'react-scroll';
import './Header.scss';
function Header({menuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")} id="header">
      <nav class="navbar">
        <div class="navbar-container">
          <ul class="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
          <div className="navbar-icons">
            <a href="mailto:pratapanipraneetha@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="assets/gmail.png" alt="Gmail" />
            </a>
            <a href="https://github.com/praneethapratapani" target="_blank" rel="noopener noreferrer">
              <img src="assets/github.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/praneethapratapani" target="_blank" rel="noopener noreferrer">
              <img src="assets/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;