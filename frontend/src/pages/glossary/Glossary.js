import React from "react"
import "./Glossary.scss"

export default function Glossary(props) {
  const { data } = props
  const path = data.glossary.data.attributes
  return (
    <div className="glossary-content">
     <div className="description-container">
      <h2>Description</h2>
      <p>{path.description}</p>
     </div>
     {path.usage && <div className="usage-container">
      <h2>Usage</h2>
      <p>{path.usage}</p>
     </div>}
     {path.sources && <div className="sources-container">
      <h2>Sources</h2>
      <p>{path.sources}</p>
     </div>}
     {path.imageBig.data && <div className="image-container">
        <h2>{"Image of " + path.name}</h2>
        <img src={process.env.REACT_APP_ADDRESS_TO_DATABASE+path.imageBig.data.attributes.url} alt={path.name + " image"}></img>
      </div>}
    </div>
  )
}