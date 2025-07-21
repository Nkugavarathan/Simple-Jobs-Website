import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layout/MainLayout"
import Jobslist from "./components/Jobslist"
import NotFoundPage from "./pages/NotFoundPage"
import JobPage from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"
import EditJobPage from "./pages/EditJobPage"

function App() {
  // add job
  // const addJob = async (newJob) => {
  //   const res = await fetch("http://localhost:8000/jobs", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json", //json endu solluram
  //     },
  //     body: JSON.stringify(newJob), // json ah mathuram post(create) panna vendiya ala nan already newJob json format than but ippadi than kudukanum endathan understand pannum
  //   })

  //   // const data = await res.json() // optional, if you want response
  //   // return data
  // }

  const addJob = async (newJob) => {
    try {
      const res = await fetch("http://localhost:8000/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      })

      if (!res.ok) {
        throw new Error(`Failed with status ${res.status}`)
      }

      const data = await res.json()
      console.log("Job added:", data)
    } catch (err) {
      console.error("POST request failed:", err)
    }
  }

  //delete job
  const deleteJob = async (id) => {
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: "DELETE",
    })
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<Jobslist />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
        <Route path="/add-job" element={<AddJobPage addJob={addJob} />} />
        <Route path="/jobs/edit-job/:id" element={<EditJobPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
