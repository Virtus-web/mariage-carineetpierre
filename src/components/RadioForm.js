import "../utils/style/form.css"
import { useState } from "react"
import styled from 'styled-components'


const RadioLabel = styled.label`
    font-size: 1.5em;
    margin-right: 0.5em;

`

const RadioForm = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, htmlFor, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <div>
            <RadioLabel htmlFor={htmlFor}>{label}</RadioLabel>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default RadioForm
