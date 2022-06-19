import React from "react"
import AboutSCSS from "./About.module.scss"
import {FiExternalLink} from "react-icons/fi"

export default function About() {
  return (
    <div className={AboutSCSS.about}>
      <h1>About this page</h1>
      <h2>Resources</h2>
      <div className={AboutSCSS.container}>
        <div className={AboutSCSS.civipedia}>
          <h2>Civilisation Fandom</h2>
          <a href="https://civilization.fandom.com/wiki/Civilization_Games_Wiki" target={"_blank"} rel="noreferrer"><FiExternalLink/></a>
        </div>
      </div>
      <h2>External game links</h2>
      <div className={AboutSCSS.container}>
        <div>
          <h2>Steam</h2>
          <a href="href=https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/" target={"_blank"} rel="noreferrer"><FiExternalLink/></a>
        </div>
        <div>
          <h2>Official website</h2>
          <a href="href=https://civilization.com/" target={"_blank"} rel="noreferrer"><FiExternalLink/></a>
        </div>
      </div>
      <h2>Other links</h2>
      <div className={AboutSCSS.container}>
        <div>
          <h2>My GitHub</h2>
          <a href="href=https://github.com/mkit2009" target={"_blank"} rel="noreferrer"><FiExternalLink/></a>
        </div>
      </div>
      <div className={AboutSCSS.myinfo}>
        <h2>Page made by: Matěj Kotrba IT2</h2>
      </div>
    </div>
  )
}