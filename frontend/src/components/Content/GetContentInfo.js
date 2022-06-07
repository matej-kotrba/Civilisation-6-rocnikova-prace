import React, { useEffect } from "react"
import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom"
import Content from "./Content"

export default function Civilisations(props) {
  
  let {name} = useParams()

  const QUERY = gql`
  query get${props.category} {
    ${props.category}(pagination:{limit: 100} ) {
      data {
        id
        attributes {
          __typename
          name
        }
      }
    }
  }
  `
  
  const { loading, error, data } = useQuery(QUERY)

  if (loading) return <p>Page is loading ...</p>
  else if (error) return <p>There was an error in loading your page.</p>
  else if (data) {
    let entry = data[props.category].data.find(item => item.attributes.name === name)
    if (!entry) return <p>Page not found</p>
    return <Content category={(entry.attributes.__typename).toLowerCase()} entry={entry.id}/>
  }

}