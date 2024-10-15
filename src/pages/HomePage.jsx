import React from "react"
import image from "../assets/image.png"
import "../css/HomePage.css"

const HomePage = () => {
  return (
    <div className="homepage-container">
      <img src={image} alt="Willy Wonka" className="homepage-image" />
      <div className="homepage-content">
        <button className="explore-button">Explore Now</button>
      </div>
    </div>
  )
}

export default HomePage
