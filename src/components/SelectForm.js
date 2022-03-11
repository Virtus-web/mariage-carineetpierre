import "../utils/style/form.css"
import { useState } from "react"
import styled from 'styled-components'


const SelectInput = styled.select`
    font-size: 1.5em;
    margin-right: 0.5em;

`

const options = ["", 1, 2, 3, 4]

const RadioForm = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <div>
            <SelectInput {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </SelectInput>
            <span>{errorMessage}</span>
        </div>
    )
}

export default RadioForm
