import React from "react"
import HomepageSCSS from "./Homepage.module.scss"
import { useLazyQuery, gql } from "@apollo/client"
import { Link } from "react-router-dom"

export default function Homepage() {

  const CIVILISATIONS_QUERY = gql`
     query($regionVar: String!)	{
      civilisations(pagination: {limit:100}, filters: {region: {contains: $regionVar}}) {
        data {
          attributes {
           name
           logo {
            data {
              attributes {
                url
              }
            }
           }
     }
   }
  }
  } `

  const [getCivilisations, { error, data }] = useLazyQuery(CIVILISATIONS_QUERY);

  if (error) console.log("Data transfer was not succesful")

  let civilisations = []

  if (data) {
    let path = data.civilisations.data
    civilisations = path.map((item, index) => {
      return <Link to={"/civilisations/" + item.attributes.name}>
        <div style={{ "--delay": index }} className={HomepageSCSS.civilisationLink}
          role="navigation" aria-label={`Link to ${item.attributes.name} page`} key={item.attributes.name}>
          <img src={process.env.REACT_APP_ADDRESS_TO_DATABASE + item.attributes.logo.data.attributes.url}
            alt={item.attributes.name + "logo image"}></img>
          <p>{item.attributes.name}</p>
        </div></Link>
    })
  }

  return (
    <div className={HomepageSCSS.homepage} >
      <div className={HomepageSCSS.title}>
        <img src="./img/logo.webp" alt=""></img>
        <h1>Sid Meier's Civilisation</h1>
      </div>
      <div className={HomepageSCSS.introduction}>
        <h2>Introduction</h2>
        <p>
          Welcome to my Sid Meier's Civilisation 6 page.
        </p>
        <p>Lets see some topics you can find here:</p>
        <ul>
          <li>Civilisations</li>
          <li>Vocabulary of game</li>
          <li>Page about this site</li>
        </ul>
      </div>
      <div className={HomepageSCSS.slideShowCivilisations} onClick={() => document.querySelector("#civShowCase").scrollIntoView()}>
        <div onClick={(e) => { getCivilisations({ variables: { regionVar: (e.currentTarget.dataset.query) } }) }}
          role="button" aria-label={"Shows all civilisations in Europe region"}
          data-query="Europe" className={HomepageSCSS.europe}>
          <img src="./img/homepage/europe.png" alt="Europe selection"></img>
          <p>Europe</p>
        </div>
        <div onClick={(e) => getCivilisations({ variables: { regionVar: (e.currentTarget.dataset.query) } })}
          role="button" aria-label={"Shows all civilisations in America region"}
          data-query="America" className={HomepageSCSS.america}>
          <img src="./img/homepage/america.png" alt="America selection"></img>
          <p>America</p>
        </div>
        <div onClick={(e) => getCivilisations({ variables: { regionVar: (e.currentTarget.dataset.query) } })}
          role="button" aria-label={"Shows all civilisations in Asia region"}
          data-query="Asia" className={HomepageSCSS.asia}>
          <img src="./img/homepage/asia.png" alt="Asia selection"></img>
          <p>Asia</p>
        </div>
        <div onClick={(e) => getCivilisations({ variables: { regionVar: (e.currentTarget.dataset.query) } })}
          role="button" aria-label={"Shows all civilisations in Africa region"}
          data-query="Africa" className={HomepageSCSS.africa}>
          <img src="./img/homepage/africa.png" alt="Africa selection"></img>
          <p>Africa</p>
        </div>
      </div>
      <div id="civShowCase" className={HomepageSCSS.civilisationsShowcase}>
        {data && civilisations}
      </div>
    </div>
  )
}

