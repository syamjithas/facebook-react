const _ = require("lodash");


const Input = ({ type = 'input', id = 'id', placeholder = 'place', required = false }:
    { type: string; id: string; placeholder: string; required: boolean }) => {
    return (
        <span className="was-validated needs-validation">
            <input type={type} className="form-control" id={id} placeholder={placeholder} required={required} />
            <div className="valid-feedback">
                Looks good!
            </div>
            <div className="invalid-feedback">
                Please choose a username.
            </div>
        </span>
    )
}

export default Input;
