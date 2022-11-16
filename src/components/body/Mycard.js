import React from 'react'
import './Mycard.css'
const Mycard = (props) => {
    return (
        <div className='mycard'>Product {props.cardno}</div>
    )
}

export default Mycard