import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Spinner from "./../components/Spinner"
function JobPage() {
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`http://localhost:8000/jobs/${id}`)
        const data = await res.json()
        setJob(data)
      } catch (error) {
        console.log("Error occur while fetch data ...")
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])
  return loading ? <Spinner /> : <h1>{job.title}</h1>
}

export default JobPage
