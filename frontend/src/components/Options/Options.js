import React from "react";
import OptionsSCSS from "./Options.module.scss";
import { FaAngleRight } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Options() {

  const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark')

  useEffect(() => {
    let mode = localStorage.getItem('mode')
    let short = document.documentElement.style
    let value = getComputedStyle(document.documentElement)
    console.log(value.getPropertyValue('--text-color-light'))
    if (mode === "light") {
      short.setProperty('--bg-color', value.getPropertyValue('--bg-color-light'));
      short.setProperty('--text-color', value.getPropertyValue('--text-color-light'));
      short.setProperty('--info-bg-color', value.getPropertyValue('--info-bg-color-light'));
      short.setProperty('--info-text-color', value.getPropertyValue('--info-text-color-light'));
    }
    else {
      short.setProperty('--bg-color', value.getPropertyValue('--bg-color-dark'));
      short.setProperty('--text-color', value.getPropertyValue('--bg-text-color-dark'));
      short.setProperty('--info-bg-color', value.getPropertyValue('--info-bg-color-dark'));
      short.setProperty('--info-text-color', value.getPropertyValue('--info-text-color-dark'));
    }
    // console.log(value.getPropertyValue('--bg-color'))
  }, [mode])

  function handleClickShow(event) {
    event.stopPropagation();
    let element = event.target;
    element.classList.toggle(`${OptionsSCSS.true}`);
    if (element.classList.contains(`${OptionsSCSS.true}`)) {
      localStorage.setItem("mode", "dark"); 
    } else {
      localStorage.setItem("mode", "light");
    }
    setMode((old) => {
      if (old === 'dark') return 'light'
      else return 'dark'
    })
  }

  function handleClickClose(event) {
    event.stopPropagation();
    document
      .querySelector(`.${OptionsSCSS.container}`)
      .classList.toggle(`${OptionsSCSS.active}`);
  }

  function handleClickOpen() {
    if (
      !document
        .querySelector(`.${OptionsSCSS.container}`)
        .classList.contains(`${OptionsSCSS.active}`)
    ) {
      document
        .querySelector(`.${OptionsSCSS.container}`)
        .classList.toggle(`${OptionsSCSS.active}`);
    }
  }

  return (
    <div className={`${OptionsSCSS.container}`} onClick={handleClickOpen}>
      <h1>
        <FaAngleRight />
      </h1>
      <div className={OptionsSCSS.close} onClick={(e) => handleClickClose(e)}>
        <IoCloseOutline />
      </div>
      <div className={OptionsSCSS.contentContainer}>
        <div className={OptionsSCSS.optionContainer}>
          <h2>Dark mode: </h2>
          <div id="mode" className={localStorage.getItem('mode') === "light" ? "" : OptionsSCSS.true} onClick={(e) => handleClickShow(e)}></div>
        </div>
      </div>
    </div>
  );
}
