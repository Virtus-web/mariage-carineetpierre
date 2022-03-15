import "../utils/style/form.css"
import { useState } from "react"
import styled from 'styled-components'


const RadioLabel = styled.label`
    font-family: 'Cormorant Garamond';
    font-size: 1.5em;
    margin-right: 0.5em;

`

const RadioForm = (props) => {
    
    const [focused, setFocused] = useState(false)

    const { label, errorMessage, onChange, htmlFor, ...inputProps } = props

    const handleFocus = () => {
        setFocused(true)
    }

    return (
        <div className="input-radio">
            <RadioLabel htmlFor={htmlFor}>{label}</RadioLabel>
            <input className="input-radio-btn"
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
                required={true}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default RadioForm
