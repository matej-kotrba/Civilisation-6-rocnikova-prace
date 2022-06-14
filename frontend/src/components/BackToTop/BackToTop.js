import React from "react"
import { FaAngleUp } from "react-icons/fa"
import "./BackToTop.scss"

export default function BackToTop() {

  function goBackToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div id="back-to-top" role="navigation" onClick={goBackToTop}>

      <FaAngleUp />

    </div>
  )
}
