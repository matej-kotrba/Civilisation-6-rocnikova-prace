import React from "react"
import "./Title.scss"


export default function Title(props) {
  return (
    <h1 className="main-title">{props.title}<img src={"http://localhost:1337"+props.img} alt="civ-logo"/></h1>
  )
}