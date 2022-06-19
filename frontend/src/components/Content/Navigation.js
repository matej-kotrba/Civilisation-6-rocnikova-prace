import React from "react"
import {Routes, Route} from "react-router-dom"
import Homepage from "../../pages/Homepage"
import About from "../../pages/about/About"
import GetContentInfo from "./GetContentInfo"

export default function Navigation() {
  
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/civilisations/:name" element={<GetContentInfo category="civilisations"/>}></Route>
        <Route path="/glossaries/:name" element={<GetContentInfo category="glossaries"/>}></Route>
        <Route path="*" element={<p>Error, page does not exist !</p>}></Route>
      </Routes>
    
    </>
  )

}