import React from "react"
import "./Footer.scss"
import {FaGithub} from "react-icons/fa"

export default function Footer() {
  return (
    <>
      <div className="footer-contianer">
        <a className="footer-icon"><FaGithub/></a>
        <a className="footer-icon"></a>
        <a className="footer-icon"></a>
      </div>
    </>
  )
}