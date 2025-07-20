import React from "react"
import JobList from "./JobList"
import Spinner from "./Spinner"
import { useState, useEffect } from "react"
// import jobData from "../jobs.json"
// import { jobs } from "../jobs.json"
export default function Jobslist({ isHome = false }) {
  // const recentjobs = jobData.jobs.slice(0, 3) // destr panni edukaddi ippadi eluthanum
  // const fulljobs = isHome ? jobs.slice(0, 3) : jobs
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const apiUrl = isHome
    ? "http://localhost:8000/jobs?_limit=3"
    : "http://localhost:8000/jobs"

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setJobs(data)
      } catch (error) {
        console.log("Error occur while fetch data ...")
      } finally {
        setLoading(false) // ✅ Fix typo here!
      }
    }

    fetchJobs()
  }, [])

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          {/* loading section */}
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobList key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
