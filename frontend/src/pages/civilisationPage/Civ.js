import React from "react"
import "./Civ.scss"

export default function Civ(props) {
  const { data } = props
  const path = data.civilisation.data.attributes

  const leadersArray = path.leaders.map(item => {
    return (
      <div className="leaders-container-leader" key={item.leaderName}>
        <h3>{item.leaderName}<img alt={"Image of leader - " + item.leaderName} src={"http://localhost:1337" + item.leaderImgSmall.data.attributes.url}></img></h3>
        <p className="leaders-container-leader-description">{item.leaderDescription}</p>
        <p className="leaders-container-leader-ability">{item.leaderAbility}</p>
      </div>
    )
  })

  return (
    <div className="civ-content">
      <div className="basic-description-container">
        <h2>Basic Description</h2>
        <p>{path.basicDescription}</p>
      </div>
      <div className="ability-description-container">
        <h2>Ability Description</h2>
        <p>{path.abilityDescription}</p>
      </div>
      <div className="victory-conditions-container">
        <h2>Victory paths</h2>
        <p>{path.victoryConditions}</p>
      </div>
      <div className="leaders-container">
        <h2>Leaders:</h2>
        <div className="leaders-container-leaders">
          {leadersArray}
        </div>
      </div>
    </div>
  )
}