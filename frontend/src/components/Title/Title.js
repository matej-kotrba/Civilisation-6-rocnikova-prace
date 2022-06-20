import React from "react"
import "./Title.scss"
import { HiPlay } from "react-icons/hi"


export default function Title(props) {
  return (
    <div className="title-container">
      <h1 className="main-title">{props.title}<img src={process.env.REACT_APP_ADDRESS_TO_DATABASE+props.img} alt="civ-logo"/></h1>
      {props.audioLink && <a className="audio-link" href={props.audioLink} target="_blank" rel="noreferrer">
        <abbr title="Soundtrack link"><HiPlay/></abbr></a>}
    </div>
  )
}