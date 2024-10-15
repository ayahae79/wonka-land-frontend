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
    <>
      <h1 className="newgame-title">New Game</h1>
      <form onSubmit={handleSubmit} className="newgame-form">
        <div className="newgame-field">
          <label className="newgame-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="newgame-input"
          />
        </div>
        <div className="newgame-field">
          <label className="newgame-label">Height:</label>
          <input
            type="text"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            className="newgame-input"
          />
        </div>
        <div className="newgame-field">
          <label className="newgame-label">Weight:</label>
          <input
            type="text"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            className="newgame-input"
          />
        </div>
        <div className="newgame-field">
          <label className="newgame-label">Age:</label>
          <input
            type="text"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="newgame-input"
          />
        </div>
        <div className="newgame-field">
          <label className="newgame-label">Medical Condition:</label>
          <input
            type="text"
            value={midical_condition}
            onChange={(event) => setMidical_condition(event.target.value)}
            className="newgame-input"
          />
        </div>
        <div className="newgame-field">
          <label className="newgame-label">Image:</label>
          <input
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            className="newgame-input"
          />
        </div>
        <button type="submit">Create Game</button>
      </form>
    </>
  )
}

export default CreateGameForm
