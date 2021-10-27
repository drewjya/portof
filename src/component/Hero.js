import React from 'react'
import logo from '../assets/profile.jpg'

console.log(logo);
function Hero() {
    return (
        <img className="image" src={logo} alt="logo" />
    )
}

export default Hero
