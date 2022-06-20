import React, { useEffect, useState } from "react";
import HomepageSCSS from "./Homepage.module.scss";
import { useLazyQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Homepage() {
  const HOMEPAGE_QUERY = gql`
    query {
      homepage {
        data {
          attributes {
            images {
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
  `;

  const CIVILISATIONS_QUERY = gql`
    query ($regionVar: String!) {
      civilisations(
        pagination: { limit: 100 }
        filters: { region: { contains: $regionVar } }
      ) {
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
    }
  `;

  // CIVILISATIONS QUERY

  const [getCivilisations, { error, data }] = useLazyQuery(CIVILISATIONS_QUERY);

  if (error) console.log("Data transfer was not succesful");

  let civilisations = [];

  if (data) {
    let path = data.civilisations.data;
    civilisations = path.map((item, index) => {
      return (
        <Link
          to={"/civilisations/" + item.attributes.name}
          key={"Link" + item.attributes.name}
        >
          <div
            style={{ "--delay": index }}
            className={HomepageSCSS.civilisationLink}
            role="navigation"
            aria-label={`Link to ${item.attributes.name} page`}
          >
            <img
              src={
                process.env.REACT_APP_ADDRESS_TO_DATABASE +
                item.attributes.logo.data.attributes.url
              }
              alt={item.attributes.name + "logo image"}
            ></img>
            <p>{item.attributes.name}</p>
          </div>
        </Link>
      );
    });
  }

  // IMAGES TO SLIDESHOW QUERY, pokus to udelat spravne

  const [loadImages, { data: dataImg, error: errorImg, loading: loadingImg }] =
    useLazyQuery(HOMEPAGE_QUERY);

  const [slideshowImg, setSlideshowImg] = useState([]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  useEffect(() => {
    if (dataImg) {
      setSlideshowImg(() =>
        dataImg.homepage.data.attributes.images.data.map((item, index) => {
          return (
            <img
              className={index === 0 ? HomepageSCSS.active : ""}
              src={
                process.env.REACT_APP_ADDRESS_TO_DATABASE + item.attributes.url
              }
              alt={"Ilustrational"}
              key={item.attributes.url}
            ></img>
          );
        })
      );
    }
    if (errorImg) {
      setSlideshowImg(() => <p>Error in loading images.</p>);
    }
  }, [loadingImg, dataImg, errorImg]);

  // Change slides function

  function handleClickArrow(e, value) {
    let parent = document.querySelector("[data-slideshow]");
    let startValue = parent.style.getPropertyValue("--positionIndex");
    let maxImageIndex =
      document.querySelector("[data-slides]").childElementCount;
    startValue = (+startValue + value) % maxImageIndex;
    if (startValue < 0) startValue = maxImageIndex - 1;
    parent.style.setProperty("--positionIndex", startValue);
    for (
      var i = 0;
      i < document.querySelectorAll("[data-slides] > img").length;
      i++
    ) {
      document
        .querySelectorAll("[data-slides] > img")
        [i].classList.remove(HomepageSCSS.active);

      document
        .querySelectorAll("[data-indicators] > div")
        [i].classList.remove(HomepageSCSS.activeIndicator);
    }

    document
      .querySelectorAll("[data-slides] > img")
      [startValue].classList.add(HomepageSCSS.active);

    document
      .querySelectorAll("[data-indicators] > div")
      [startValue].classList.add(HomepageSCSS.activeIndicator);
  }

  return (
    <div className={HomepageSCSS.homepage}>
      <div className={HomepageSCSS.title}>
        <img src="./img/logo.webp" alt=""></img>
        <h1>Sid Meier's Civilisation</h1>
      </div>
      <div className={HomepageSCSS.introduction}>
        <h2>Introduction</h2>
        <p>
          Welcome to my Sid Meier's Civilisation 6 page. This is the hompage of
          this project, down below you can see some interasting topics you can
          find here.
        </p>
      </div>
      <h2>Civilisations by region:</h2>
      <div
        className={HomepageSCSS.slideShowCivilisations}
        onClick={() => document.querySelector("#civShowCase").scrollIntoView()}
      >
        <div
          onClick={(e) => {
            getCivilisations({
              variables: { regionVar: e.currentTarget.dataset.query },
            });
          }}
          role="button"
          aria-label={"Shows all civilisations in Europe region"}
          data-query="Europe"
          className={HomepageSCSS.europe}
        >
          <img src="./img/homepage/europe.png" alt="Europe selection"></img>
          <p>Europe</p>
        </div>
        <div
          onClick={(e) =>
            getCivilisations({
              variables: { regionVar: e.currentTarget.dataset.query },
            })
          }
          role="button"
          aria-label={"Shows all civilisations in America region"}
          data-query="America"
          className={HomepageSCSS.america}
        >
          <img src="./img/homepage/america.png" alt="America selection"></img>
          <p>America</p>
        </div>
        <div
          onClick={(e) =>
            getCivilisations({
              variables: { regionVar: e.currentTarget.dataset.query },
            })
          }
          role="button"
          aria-label={"Shows all civilisations in Asia region"}
          data-query="Asia"
          className={HomepageSCSS.asia}
        >
          <img src="./img/homepage/asia.png" alt="Asia selection"></img>
          <p>Asia</p>
        </div>
        <div
          onClick={(e) =>
            getCivilisations({
              variables: { regionVar: e.currentTarget.dataset.query },
            })
          }
          role="button"
          aria-label={"Shows all civilisations in Africa region"}
          data-query="Africa"
          className={HomepageSCSS.africa}
        >
          <img src="./img/homepage/africa.png" alt="Africa selection"></img>
          <p>Africa</p>
        </div>
      </div>
      <div id="civShowCase" className={HomepageSCSS.civilisationsShowcase}>
        {data && civilisations}
      </div>
      {loadImages && (
        <div data-slideshow className={HomepageSCSS.images}>
          <div
            className={HomepageSCSS.arrowLeft}
            onClick={(e) => handleClickArrow(e, -1)}
          >
            <FaAngleLeft />
          </div>
          <div
            className={HomepageSCSS.arrowRight}
            onClick={(e) => handleClickArrow(e, 1)}
          >
            <FaAngleRight />
          </div>
          <div data-indicators className={HomepageSCSS.indicator}>
            {slideshowImg.length != 0 &&
              slideshowImg.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${HomepageSCSS.indicatorSymbol} ${
                      index === 0 ? HomepageSCSS.activeIndicator : ""
                    }`}
                  ></div>
                );
              })}
          </div>
          <div data-slides className={HomepageSCSS.slides}>
            {slideshowImg}
          </div>
        </div>
      )}
    </div>
  );
}
