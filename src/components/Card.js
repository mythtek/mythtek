import React from 'react'

const Card = (props) => {
    return (
        <div className='cards'>
            <img alt={props.alt} src={props.image} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card
