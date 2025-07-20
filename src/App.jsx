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
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<Jobslist />} />
        <Route path="/jobs/:id" element={<JobPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
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
