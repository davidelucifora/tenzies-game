import React from 'react'
import { useEffect, useState } from 'react'
import Die from './components/die'
import helpers from './helpers'
import './App.css'

function App() {
  
  // 'First Throw' Initialise an Array of 10 dice 
  // The Array is created in a separate helper function file
  const [dice, setDice] = useState(helpers.allNewDice)
  
  //Iterate through the Arrays to generate die components 
  const listDice = dice.map((die, index) => {
    
    return <Die 
    key = {index} 
    value = {die.value}
    isHeld = {die.isHeld}
    holdDie={() => holdDie(index)} 
    />
  })
  
    //Rolls Dice
    function rollDice() {
      setDice(oldDice => oldDice.map(die => {
        if (die.isHeld) return {...die}
        else return {
          ...die,
          value : Math.floor(Math.random() * 6) + 1} 
      }))

      helpers.checkForWin(dice) && alert('you won')

    }

  
  //Holds the dice selected
  function holdDie(index) {
    
    const clickedDiceId = index
    setDice(prevDice => prevDice.map((die) =>  {
      
      if (die.id == clickedDiceId) {
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
