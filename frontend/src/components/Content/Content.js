import React from "react"
import { useQuery, gql } from "@apollo/client"
import Title from "../Title/Title"
import CivPage from "../../pages/civilisationPage/Civ"
import GlossaryPage from "../../pages/glossary/Glossary"

export default function Content(props) {

  let QUERY

  switch (props.category) {

    case "civilisation": {

      QUERY = gql`query get${props.category} {
          ${props.category}(id: ${props.entry}) {
            data {
              id
              attributes {
                name
                basicDescription
                abilityDescription
                victoryConditions
                audioLink
                logo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                leaders {
                  leaderName
                  leaderDescription
                  leaderAbility
                  leaderImgSmall {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
        }
      }
      `
      break
    }

    case "glossary": {
      QUERY = gql`
      query get${props.category} {
        ${props.category}(id: ${props.entry}) {
          data {
        attributes {
          name
          description
          usage
          sources
          image {
            data {
              attributes {
                url
              }
            }
          }
          imageBig {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
        }
      }
    `
      break
    }
    default: {
      console.log("Wrong request !")
    }
  }

  // QUERY = gql`
  // query get${props.category} {
  //   ${props.category}(id: ${props.entry}) {
  //     data {
  //       id
  //       attributes {
  //         name
  //       }
  //     }
  //   }
  // }
  // `


  const { loading, error, data } = useQuery(QUERY)

  if (loading) return <p>Page is loading ...</p>
  else if (error) return <p>There was an error in loading your page.</p>
  else if (data) {
    console.log(data)
    switch (props.category) {
      case "civilisation": {
        return (
          <>
            <Title title={data.civilisation.data.attributes.name} img={data.civilisation.data.attributes.logo.data.attributes.url}
              audioLink={data.civilisation.data.attributes.audioLink} />
            <CivPage data={data} />
          </>
        )
      }
      case "glossary": {
        return (
          <>
            <Title title={data.glossary.data.attributes.name} img={data.glossary.data.attributes.image.data.attributes.url} />
            <GlossaryPage data={data} />
          </>
        )
      }
      default: {
        <p>Unsupported site.</p>
      }
    }
  }
}