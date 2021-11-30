import { useState } from "react";

const _ = require("lodash");

const Input = ({
    type = 'input',
    id = 'id',
    placeholder = 'place',
    validMessage,
    invalidMessage,
    required = false }:
    {
        type: string;
        id: string;
        placeholder: string;
        validMessage: string;
        invalidMessage: string;
        required: boolean;
    }) => {
    const [validationClass, setValidtionClass] = useState("needs-validation")

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValidtionClass("was-validated");
    }
    return (
        <span className={validationClass}>
            <input type={type} className="form-control" id={id} placeholder={placeholder} required={required} onBlur={(e) => handleBlur(e)} />
            {validMessage && <div className="valid-feedback">
                {validMessage}
            </div>}
            {invalidMessage && <div className="invalid-feedback">
                {invalidMessage}
            </div>}
        </span>
    )
}

export default Input;
