import React from "react"

import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import Jobslist from "../components/Jobslist"

import { ViewAllJobs } from "../components/ViewAllJobs"
function HomePage() {
  return (
    <div>
      <Hero />
      <HomeCards />
      <Jobslist isHome={true} />
      <ViewAllJobs />
    </div>
  )
}

export default HomePage
