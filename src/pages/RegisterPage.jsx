import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RegisterUser } from "../services/Auth"

const RegisterPage = () => {
  let navigate = useNavigate()

  const initialState = {
    username: "",
    email: "",
    password: "",
    role: "user", // Optional, can be set to user by default
  }

  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState(null) // State to handle any error messages

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent page refresh

    try {
      const user = await RegisterUser(formData) // Call the registration service
      console.log(user) // You can handle the user response here
      navigate("/") // Redirect to the home page after registration
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed") // Handle any errors
    }
  }

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error if exists */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
