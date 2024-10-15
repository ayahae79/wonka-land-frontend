import React, { useState, useEffect, useRef } from "react"
import image from "../assets/image.png"
import { Link } from "react-router-dom"

const HomePage = () => {
  const imageRef = useRef(null)

  const handleButtonMouseOver = () => {
    imageRef.current.classList.add("blurred")
  }

  const handleButtonMouseOut = () => {
    imageRef.current.classList.remove("blurred")
  }

  return (
    <div className="homepage-container">
      <img
        src={image}
        alt="Willy Wonka"
        className="homepage-image"
        ref={imageRef}
      />
      <div className="homepage-content">
        <Link to="/games">
          <button
            className="explore-button"
            onMouseOver={handleButtonMouseOver}
            onMouseOut={handleButtonMouseOut}
          >
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
