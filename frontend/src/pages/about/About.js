import React from "react";
import AboutSCSS from "./About.module.scss";
import { gql, useQuery } from "@apollo/client";
import {FaAngleUp} from "react-icons/fa"

export default function About() {
  const GET_LINKS = gql`
    query {
      gameLink {
        data {
          attributes {
            name
            links {
              data {
                attributes {
                  name
                  image {
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
      }
      otherLink {
        data {
          attributes {
            name
            links {
              data {
                attributes {
                  name
                  image {
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
      }
      resource {
        data {
          attributes {
            name
            links {
              data {
                attributes {
                  name
                  image {
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
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_LINKS);

  if (loading) return <p>Data on page is loading ...</p>;
  else if (error) return <p>There was an error with data.</p>;
  else if (data) {
    return (
      <div className={AboutSCSS.about}>
        <h1>Related links</h1>
        {/* Resources */}
        <div className={AboutSCSS.container}>
          <h2>{data.resource.data.attributes.name}</h2>
          <div className={AboutSCSS.containerItemGrid}>
            {data.resource.data.attributes.links.data.map((item, index) => {
              return (
                <div
                  className={AboutSCSS.containerItem}
                  key={item.attributes.name}
                >
                  <h3>{item.attributes.name}
                    <div><FaAngleUp/></div>
                  </h3>
                  <img
                    src={
                      process.env.REACT_APP_ADDRESS_TO_DATABASE +
                      item.attributes.image.data.attributes.url
                    }
                    alt={"Image of " + item.attributes.name}
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
        {/* Game links */}
        <div className={AboutSCSS.container}>
          <h2>{data.gameLink.data.attributes.name}</h2>
          <div className={AboutSCSS.containerItemGrid}>
            {data.gameLink.data.attributes.links.data.map((item, index) => {
              return (
                <div
                  className={AboutSCSS.containerItem}
                  key={item.attributes.name}
                >
                  <h3>{item.attributes.name}
                    <div><FaAngleUp/></div>
                  </h3>
                  <img
                    src={
                      process.env.REACT_APP_ADDRESS_TO_DATABASE +
                      item.attributes.image.data.attributes.url
                    }
                    alt={"Image of " + item.attributes.name}
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
        {/* Other links */}
        <div className={AboutSCSS.container}>
          <h2>{data.otherLink.data.attributes.name}</h2>
          <div className={AboutSCSS.containerItemGrid}>
            {data.otherLink.data.attributes.links.data.map((item, index) => {
              return (
                <div
                  className={AboutSCSS.containerItem}
                  key={item.attributes.name}
                >
                  <h3>{item.attributes.name}
                    <div><FaAngleUp/></div>
                  </h3>
                  <img
                    src={
                      process.env.REACT_APP_ADDRESS_TO_DATABASE +
                      item.attributes.image.data.attributes.url
                    }
                    alt={"Image of " + item.attributes.name}
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
