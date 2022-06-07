import { useQuery, gql } from "@apollo/client"
import React from "react"


export default function GetLinks(props) {
  const QUERY = gql`
  query get${props.name} {
    ${props.name}(pagination:{limit: 100} ) {
      data {
        attributes {
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
    const array = data[props.name].data.map((item, index) => {
      return <a key={item.attributes.name}
        href={"/" + props.name + "/" + item.attributes.name}>
        {item.attributes.name}<span className="material-symbols-outlined">
          arrow_forward_ios
        </span>
      </a>
    })

    return <>{array}</>
  }
}