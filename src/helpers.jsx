//Returns an Array of 6 random numbers

export default (function helpers() {

    const allNewDice = function() {
    
    const diceArray = []
    
    for (let i = 0; i < 10; i++) {
        let randomDie = {
            id: i,
            value: Math.floor(Math.random() * 6 + 1),
            isHeld: false
        }
         
        diceArray.push(randomDie)
    }

    return diceArray
}

return {allNewDice}

})();
