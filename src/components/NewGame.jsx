import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
const BASE_URL = "http://localhost:3000"
const CreateGameForm = () => {
  let navigate = useNavigate()

  const [name, setName] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [age, setAge] = useState("")
  const [midical_condition, setMidical_condition] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const formData = {
        name,
        height,
        weight,
        age,
        midical_condition,
        image,
      }
      await axios.post(`${BASE_URL}/game/games`, formData)
      console.log("saved")
      setName("")
      setHeight("")
      setWeight("")
      setAge("")
      setMidical_condition("")
      setImage("")

      navigate("/games")
    } catch (error) {
      console.error(error)
      // You can also display an error message to the user here
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Height:
        <input
          type="text"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
      </label>
      <br />
      <label>
        Weight:
        <input
          type="text"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="text"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </label>
      <br />
      <label>
        Medical Condition:
        <input
          type="text"
          value={midical_condition}
          onChange={(event) => setMidical_condition(event.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Game</button>
    </form>
  )
}

export default CreateGameForm
