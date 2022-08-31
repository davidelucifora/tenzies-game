import React from 'react'

// Individual die components
function Die(props) {

    // Destructuring props
    const { holdDie, value} = props

    // Change bg if die is held.
    const styles = {
        backgroundColor: props.isHeld && 'aquamarine'
    }

    return (
        <div 
        className={'die'}
        style={styles}
        onClick={holdDie}
       >
        
            <h4>{value}</h4>
        
        </div>
    )
}

export default Die