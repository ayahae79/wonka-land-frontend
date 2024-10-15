import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RegisterUser } from "../services/Auth"
import background from "../assets/Background2.jpg"
import "../css/RegisterPage.css"

const RegisterPage = () => {
  let navigate = useNavigate()
  const initialState = {
    username: "",
    email: "",
    password: "",
  }
  const [formValues, setFormValues] = useState(initialState)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await RegisterUser(formValues)
      setFormValues(initialState)
      navigate("/")
    } catch (error) {
      setError("Registration failed! Please try again.")
    }
  }

  return (
    <div className="register-page">
      <div className="left-side">
        <img src={background} alt="Background" className="background-image" />
      </div>
      <div className="right-side">
        <form onSubmit={handleSubmit} className="register-form">
          <h1 className="register-title">Join the Wonka Adventure!</h1>
          <p className="register-subtitle">
            Register to explore the magic of Wonka Land
          </p>

          <div className="input-wrapper">
            <span className="material-icons input-icon">person</span>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formValues.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-wrapper">
            <span className="material-icons input-icon">email</span>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-wrapper">
            <span className="material-icons input-icon">lock</span>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
