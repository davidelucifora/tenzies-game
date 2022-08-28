import React from 'react'
import { useEffect, useState } from 'react'
import Die from './components/die'
import helpers from './helpers'
import './App.css'

function App() {

  // 'First Throw' Initialise an Array of 10 dice 
  // The Array is created in a separate helper function 
  const [dice, setDice] = useState(helpers.allNewDice)

  //Iterate through the Arrays to generate die components 
  const listDice = dice.map((die, index) => {
    return <Die key = {index} value = {die} />
  })

  //Roll Dice
  function rollDice() {
    setDice(helpers.allNewDice())
  }

  return (
    <main className="App">
      <h2 className="game-title">Tenzies Game!</h2>
      <div className ="dice-container">
      <Die value={6} className="die"/>
      {/* list Dice */}
      {listDice}
      </div>

      {/* Roll button */}
      <button type="button"
      className="roll-button"
      onClick = {rollDice}>Roll Dice</button>

    </main>
  )

}

export default App
