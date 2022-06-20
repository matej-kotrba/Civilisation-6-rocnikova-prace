import React from "react"
import "./Civ.scss"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function Civ(props) {

  const { data } = props
  const path = data.civilisation.data.attributes

  const leadersArray = path.leaders.map(item => {
    return (
      <div className="leaders-container-leader" key={item.leaderName}>
        <h3>{item.leaderName}<img alt={"Image of leader - " + item.leaderName} src={process.env.REACT_APP_ADDRESS_TO_DATABASE + item.leaderImgSmall.data.attributes.url}></img></h3>
        <ReactMarkdown className="leaders-container-leader-description" children={item.leaderDescription} remarkPlugins={[remarkGfm]}/>
        <ReactMarkdown className="leaders-container-leader-ability" children={item.leaderAbility} remarkPlugins={[remarkGfm]}/>
      </div>
    )
  })

  return (
    <div className="civ-content">
      <div className="basic-description-container">
        <h2>Basic Description</h2>
        <ReactMarkdown children={path.basicDescription} remarkPlugins={[remarkGfm]}/>
      </div>
      <div className="ability-description-container">
        <h2>Ability Description</h2>
        <ReactMarkdown children={path.abilityDescription} remarkPlugins={[remarkGfm]}/>
      </div>
      <div className="victory-conditions-container">
        <h2>Victory paths</h2>
        <ReactMarkdown children={path.victoryConditions} remarkPlugins={[remarkGfm]}/>
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