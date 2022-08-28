//Returns an Array of 6 random numbers

export default (function helpers() {

    const allNewDice = function() {
    
    const diceArray = []
    
    for (let i = 0; i < 9; i++) {
        let randomDie = Math.floor(Math.random() * 6 + 1)
        diceArray.push(randomDie)
    }

    return diceArray
}

return {allNewDice}

})();
