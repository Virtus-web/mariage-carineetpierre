import "../utils/style/form.css"
import { useState } from "react"

const TextForm = (props) => {
    const [focused, setFocused] = useState(false)
    // const { label, errorMessage, onChange, id, onInvalid, ...inputProps } = props
    const { type, name, placeholder, errorMessage, label, onChange, ...inputProps } = props

    const handleFocus = () => {
        setFocused(true)
        // console.log(e)
    }

    return (
        <div className="input-text">
            <input
                {...inputProps}
                type={type}
                name={name}
                placeholder={placeholder}
                label={label}
                onChange={onChange}
                // onInvalid={onInvalid}
                onBlur={handleFocus}
                focused={focused.toString()}
                required={true}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default TextForm
