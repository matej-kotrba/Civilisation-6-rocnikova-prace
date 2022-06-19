import React from "react";
import PreloaderSCSS from "./Preloader.module.scss"

export default function Preloader() {
  return (
    <div className={PreloaderSCSS.loader}>
      <div className={PreloaderSCSS.flex}>
        <div className={PreloaderSCSS.circle}></div>
        <div className={PreloaderSCSS.circle}></div>
        <div className={PreloaderSCSS.circle}></div>
        <div className={PreloaderSCSS.circle}></div>
      </div>
    </div>
  )
}