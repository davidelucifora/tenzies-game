import React from 'react'

function Die(props) {

    const styles = {
        backgroundColor: props.isHeld && 'aquamarine'
    }

    return (
        <div 
        className={'die'}
        style={styles}
        onClick={props.holdDie}
        id={props.id}>
        
            <h4>{props.value}</h4>
        
        </div>
    )
}

export default Die