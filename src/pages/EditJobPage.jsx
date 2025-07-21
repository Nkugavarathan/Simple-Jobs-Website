import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function EditJob() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [type, setType] = useState("")
  const [jobname, setJobname] = useState("")
  const [description, setDescription] = useState("")
  const [salary, setSalary] = useState("")
  const [location, setLocation] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [companydes, setCompanydes] = useState("")
  const [cemail, setCEmail] = useState("")
  const [cphone, setCPhone] = useState("")

  useEffect(() => {
    // Fetch job details by id
    const fetchJob = async () => {
      try {
        const res = await fetch(`http://localhost:8000/jobs/${id}`)
        const data = await res.json()
        // Pre-fill form state
        setType(data.type || "")
        setJobname(data.title || "")
        setDescription(data.description || "")
        setSalary(data.salary || "")
        setLocation(data.location || "")
        setCompanyName(data.company?.name || "")
        setCompanydes(data.company?.description || "")
        setCEmail(data.company?.cemail || "")
        setCPhone(data.company?.cphone || "")
      } catch (error) {
        console.error("Failed to fetch job data", error)
      }
    }
    fetchJob()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const updatedJob = {
      title: jobname,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companydes,
        cemail,
        cphone,
      },
    }

    try {
      await fetch(`http://localhost:8000/jobs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedJob),
      })
      navigate("/jobs")
    } catch (error) {
      console.error("Failed to update job", error)
    }
  }

  return (
    <section className="bg-indigo-50 min-h-screen py-24">
      <div className="container m-auto max-w-2xl">
        <div className="bg-white px-6 py-8 shadow-md rounded-md border m-4 md:m-0">
          <h2 className="text-3xl text-center font-semibold mb-6">Edit Job</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. SE, ML"
                required
                value={jobname}
                onChange={(e) => setJobname(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="salary"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="">Select Salary Range</option>
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-gray-700 font-bold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={companydes}
                onChange={(e) => setCompanydes(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={cemail}
                onChange={(e) => setCEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={cphone}
                onChange={(e) => setCPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline cursor-pointer"
                type="submit"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditJob
