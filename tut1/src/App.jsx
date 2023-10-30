import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Game from './01_game'
import RentalProperty from './02_rentalProperty'
import Clicker from "./03_clicker"
import Counter from "./04_counter"
import Toggler from "./05_toggler"
import ToggleCounter from "./06_toggleCounter"
import ColorBox from "./07_colorBox"
import ColorGrid from "./07_colorGrid"

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: "150" },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <>
      {/* <Game val1="🍎" val2="🍎" val3="🍎" />
      <Game val1="🍌" val2="🍎" val3="🍌" /> */}
      {/* <RentalProperty data={properties} /> */}
      {/* <Clicker message="Please Click me!!!" buttonText="Click"/>
      <Clicker message="Please Dont Click me!!!" buttonText="Not Click"/> */}
      {/* <Counter /> */}
      {/* <Toggler /> */}
      {/* <ToggleCounter /> */}
      <ColorGrid />
    </>
  )
}

export default App
