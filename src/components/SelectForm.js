import "../utils/style/form.css"
import { useState } from "react"
// import styled from 'styled-components'


// const SelectInput = styled.input`
//     height: 1em;
//     font-size: 1.5em;

// `

// const options = [null, 1, 2, 3, 4]

const RadioForm = (props) => {
    const [focused, setFocused] = useState(false)
    const { errorMessage, onChange, type, min, max, ...inputProps } = props

    const handleFocus = () => {
        setFocused(true)
    }

    return (
        
        <div>
            <input className="input-num"
                {...inputProps}
                type={type}
                min={min}
                max={max}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
                required={true}
            ></input>
            <span>{errorMessage}</span>
        </div>
    )
}

export default RadioForm

        // <div>
        //     <SelectInput {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} onInvalid={onInvalid}>
        //         {options.map((option, index) => (
        //             <option key={index} value={option}>{option}</option>
        //         ))}
        //     </SelectInput>
        //     <span>{errorMessage}</span>
        // </div>
