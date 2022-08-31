import React from 'react'
import { useEffect, useState } from 'react'
import Die from './components/die'
import helpers from './helpers'
import Confetti from 'react-confetti'
import './App.css'

function App() {
  
  // 'First Throw' Initialise an Array of 10 dice 
  // The Array is created in a separate helper function file
  // Set as the state initial state of dice.
  const [dice, setDice] = useState(helpers.allNewDice)

  //Tenzies determines whether the game is won or not. Initial state is false
  const [tenzies, setTenzies] = useState(false)

  //Every time the state of the dice change, check for win and setTenzies accordingly
  useEffect(() => {

    helpers.checkForWin(dice) ? setTenzies(true) : setTenzies(false)

  },[dice])
  
  //Iterate through the dice to generate die components 
  const listDice = dice.map((die) => {
    
    return <Die 
    key = {die.id} 
    value = {die.value}
    isHeld = {die.isHeld}
    holdDie={() => holdDie(die.id)} 
    />
  })
  
    //Rolls Dice
    function rollDice() {
      
      //If the game is won roll a whole new dice
      tenzies ? setDice(helpers.allNewDice()) :

      //Otherwise, roll but hold the dice that were clicked
      setDice(oldDice => oldDice.map(die => {
        if (die.isHeld) return {...die}
        else return {
          ...die,
          value : Math.floor(Math.random() * 6) + 1} 
      }))
      helpers.checkForWin(dice)} 

  
  //Holds the dice selected
  function holdDie(clickedDieID) {
    
    setDice(prevDice => prevDice.map((die) =>  {
      
      //Toggle the value of isHeld every time die is clicked.
      if (die.id == clickedDieID) {
        return {
          ...die,
          isHeld : !die.isHeld
        }
    }

    else return {...die}


  }))

} 

//Render App Component
  return (
    <main className="App">
      <h2 className="game-title">Tenzies Game!</h2>
      <p className="subtitle">Roll the dice and click the ones you want to keep for the next roll. Once the dice are all the same you win!</p>
      <div className ="dice-container">
      
      {/* Show confetti if the user wins */}
      {tenzies && <Confetti />}
      
      {/* list Dice */}
      {listDice}
      </div>

      {/* Roll button */}
      <button type="button"
      className="roll-button"
      onClick = {rollDice}>{tenzies ? 'Play Again' : 'Roll Dice'}</button>

    </main>
  )

}

export default App
