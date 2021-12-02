import React from 'react'
import { StyledInput } from './FormElements'

const Input = ({type, placeholder}) => {
    return (
        <StyledInput type={type} placeholder={placeholder} />
    )
}

export default Input
