import React from 'react'
import { FormTextArea } from './FormElements'

const Message = ({type, placeholder}) => {
    return (
        <FormTextArea type={type} placeholder={placeholder} />
    )
}

export default Message
