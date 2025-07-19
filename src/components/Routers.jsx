import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import App from "../App"
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/" />
      </Routes>
    </div>
  )
}

export default Routers
