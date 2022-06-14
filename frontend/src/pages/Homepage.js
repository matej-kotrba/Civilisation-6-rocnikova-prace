import React from "react"
import HomepageSCSS from "./Homepage.module.scss"
import { useLazyQuery, gql } from "@apollo/client"

export default function Homepage() {

   const CIVILISATIONS_QUERY = gql`
     query($regionVar: String!)	{
      civilisations(pagination: {limit:100}, filters: {region: {contains: $regionVar}}) {
        data {
          attributes {
           name
     }
   }
  }
  } `

  const [getCivilisations, { error, data }] = useLazyQuery(CIVILISATIONS_QUERY);

  if (error) console.log("Data transfer was not succesful")

  let civilisations = []

  if (data) {
    let path = data.civilisations.data
    civilisations = path.map(item => {
      return <div className={HomepageSCSS.civilisationLink} 
      role="navigation" aria-label={`Link to ${item.attributes.name} page`} key={item.attributes.name}>
        <p>{item.attributes.name}</p>
      </div>
    })
  }

  return (
    <div className={HomepageSCSS.homepage}>
      <div className={HomepageSCSS.title}>
        <img src="./img/logo.webp" alt=""></img>
        <h1>Sid Meier's Civilisation 6</h1>
      </div>
      <div className={HomepageSCSS.slideShowCivilisations}>
        <div onClick={(e) => {getCivilisations({variables: {regionVar: (e.currentTarget.dataset.query)}})}}
         role="button" aria-label={"Shows all civilisations in Europe region"}
          data-query="Europe" className={HomepageSCSS.europe}>
          <img src="./img/homepage/europe.png" alt="Europe selection"></img>
          <p>Europe</p>
        </div>
        <div onClick={(e) => getCivilisations({variables: {regionVar: (e.currentTarget.dataset.query)}})}
         role="button" aria-label={"Shows all civilisations in America region"}
          data-query="America" className={HomepageSCSS.america}>
          <img src="./img/homepage/america.png" alt="America selection"></img>
          <p>America</p>
        </div>
        <div onClick={(e) => getCivilisations({variables: {regionVar: (e.currentTarget.dataset.query)}})}
         role="button" aria-label={"Shows all civilisations in Asia region"}
          data-query="Asia" className={HomepageSCSS.asia}>
          <img src="./img/homepage/asia.png" alt="Asia selection"></img>
          <p>Asia</p>
        </div>
        <div onClick={(e) => getCivilisations({variables: {regionVar: (e.currentTarget.dataset.query)}})}
         role="button" aria-label={"Shows all civilisations in Africa region"}
          data-query="Africa" className={HomepageSCSS.africa}>
          <img src="./img/homepage/africa.png" alt="Africa selection"></img>
          <p>Africa</p>
        </div>
      </div>
      <div className={HomepageSCSS.civilisationsShowcase}>
        {data && civilisations}
      </div>
    </div>
  )
}

