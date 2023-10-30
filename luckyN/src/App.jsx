import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dice from "./dice"
import { sum } from "./utils"
import Luckyn from "./luckyn"
import BoxGrid from "./BoxGrid"
import './App.css'

function lessThan6(dice) {
  return sum(dice) <= 9;
}

function isSame(dice) {
  return dice.every((d) => d === dice[0]);
}

function App() {
  return (
    <>
      {/* <Luckyn diceCount={3} target={8} winCheck={lessThan6} title="Check Sum <= 9" /> */}
      {/* <Luckyn diceCount={2} target={6} winCheck={isSame} title="Identical Check" /> */}

       <BoxGrid />
    </>
  )
}

export default App
