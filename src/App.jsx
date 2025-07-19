import Navbar from "./components/Navbar"

import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import Jobslist from "./components/Jobslist"

import { ViewAllJobs } from "./components/ViewAllJobs"
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <HomeCards />
      <Jobslist />
      <ViewAllJobs />
    </>
  )
}

export default App
