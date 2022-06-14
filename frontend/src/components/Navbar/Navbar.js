import React from "react"
import "./Navbar.scss"
import GetLinks from "./GetLinks";
import Logo from "./img/logo.webp"

export default function Navbar() {

  function handleClick(e) {
    e.target.classList.toggle('active')
  }

  return (
    <nav className="main-navigation" id="main-navigation">
      <a className="home-link" href={"/"}><img role="navigation" aria-label="nav-to-home" id="logo-link" src={Logo} alt="Home page link"></img></a>
      <ul className="other-link">
        <li onClick={(e) => handleClick(e)} id="civilisations" role="navigation" aria-label="civilisations-nav"
        >
          <h3 className="other-link-name">Civilisations</h3>
          <div className="other-link-links" tabIndex="-1">
            <GetLinks name="civilisations" />
          </div>
        </li>
        <li onClick={(e) => handleClick(e)} id="glossary" role="navigation" aria-label="glossary-nav"
        >
          <h3 className="other-link-name">Glossary</h3>
          <div className="other-link-links" tabIndex="-1">
            <GetLinks name="glossaries" />
          </div>
        </li>
        <li id="about">
          <a href="/about"><h3 className="other-link-name">About</h3></a>
        </li>
      </ul>
    </nav>
  );
}