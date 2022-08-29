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

    return <Die 
    key = {index} 
    value = {die.value}
    isHeld = {die.isHeld}
    holdDie={holdDie} 
    id={index}
    />
  })

  // Hold value of Die when clicked 
// I click  a dice. I know its value. Its key and whether it's held.
// First of all, I have to toggle is Held onClick always.
// But to know which die I'm clicking I need to 

function holdDie(e) {
  e.stopPropagation()
  const clickedDiceId = parseInt(e.currentTarget.id)
  setDice(prevDice => prevDice.map((die) =>  {

    if (die.id == clickedDiceId) {
      console.log('I clicked the die with key' + die.id + 'and id' + clickedDiceId)
      return {
        ...die,
        isHeld : !die.isHeld
      }
      
    }

    else return {...die}
    // return {
    //   ...die,
    //   isHeld : !die.isHeld
    // }


  }))

  console.log(dice)
} 

  //Roll Dice
  function rollDice() {
    setDice(helpers.allNewDice())
  }

  return (
    <main className="App">
      <h2 className="game-title">Tenzies Game!</h2>
      <div className ="dice-container">
      
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
