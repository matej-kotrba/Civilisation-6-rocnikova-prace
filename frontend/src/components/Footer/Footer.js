import React from "react"
import "./Footer.scss"
import { FaGithub, FaSteam } from "react-icons/fa"
import { IoGlobeOutline } from "react-icons/io5"

export default function Footer() {
  return (
    <>
      <div className="footer-contianer">
        <div className="footer-link-container">
          <label htmlFor="githublink">My GitHub:</label>
          <a href="https://github.com/mkit2009" id="githublink" target="_blank" rel="noreferrer" className="footer-icon"><FaGithub /></a>
        </div>
        <div className="footer-link-container">
          <label htmlFor="steamlink">Buy game on Steam:</label>
          <a href="https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/" id="steamlink" target="_blank" rel="noreferrer" className="footer-icon"><FaSteam /></a>
        </div>
        <div className="footer-link-container">
          <label htmlFor="weblink">Visit official website:</label>
          <a href="https://civilization.com/" id="weblink" target="_blank" rel="noreferrer" className="footer-icon"><IoGlobeOutline /></a>
        </div>

        {/* <a href="https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/" target="_blank" rel="noreferrer" className="footer-icon"><FaSteam/></a>
        <a href="https://civilization.com/" target="_blank" rel="noreferrer" className="footer-icon"><IoGlobeOutline/></a> */}
      </div>
    </>
  )
}