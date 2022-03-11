import "../utils/style/form.css"
import { useState } from "react"

const TextForm = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <div className="formInput">
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

export default TextForm
