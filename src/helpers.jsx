//Returns an Array of 6 random numbers

export default (function helpers() {

    //Creates a random dice Array
    const allNewDice = function() {

        /* Random ID generator */
        function generateDieID() {
            return (Math.random() * Date.now()).toString(16)
        }
     
    const diceArray = []
    
    for (let i = 0; i < 10; i++) {

        //Think about refactoring to constructor
        let randomDie = {
            id: generateDieID(),
            value: Math.floor(Math.random() * 6 + 1),
            isHeld: false
        }
         
        diceArray.push(randomDie)
    }

    return diceArray
}

//Checks if all dice are held and if all dice have same value
const checkForWin = function(dice) {
    const allDiceAreHeld = dice.every(die => die.isHeld)
    const allDiceSameValue = dice.every(die => die.value === dice[0].value)
    
    //If so returns true
    return allDiceAreHeld && allDiceSameValue
}

return {allNewDice, checkForWin}

})();
