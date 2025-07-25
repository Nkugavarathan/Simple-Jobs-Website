import React from "react"
import { useNavigate } from "react-router-dom"

function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div>
      <section className="text-center flex flex-col justify-center items-center h-96">
        <i className="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <button
          onClick={() => navigate("/")}
          className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >
          Go Back
        </button>
      </section>
    </div>
  )
}

export default NotFoundPage
