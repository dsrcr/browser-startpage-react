import React from 'react'
import './Link.css'

const Link = ({ destination, name }) => {
    return (
        <a href={destination}>{name}</a>
    )
}

export default Link