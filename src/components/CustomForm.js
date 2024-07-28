import React, { useState }  from "react";
import "./CustomForm.css";

function CustomForm(props) {
    const[errors, setErrors] = useState({});
    const[message, setMessage] = useState("");

    const handleSubmit = (e, buttonType) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(props).forEach((key) => {
            if (props[key].isInput && props[key].required && !props[key].ref.current.value) {
                newErrors[key] = `${props[key].label} is required`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            setMessage("");

            if (buttonType === "login") {
                props.loginButton.handler();
                setMessage("Login successful!");
            } else if (buttonType === "register") {
                props.registerButton.handler();
                setMessage("Registration successful!");
            }
        }
    };

    return (
        <div className="form-container">
            <form>
            {Object.keys(props).map((key) =>
            props[key].isInput ? (
                <div key={key} className="form-group">
                <label htmlFor={props[key].label}>{props[key].label}</label>
                <input
                    className="form-input"
                    key={key}
                    ref={props[key].ref}
                    type={props[key].type}
                    id={props[key].label}
                    placeholder={props[key].placeholder}
                    required={props[key].required || false }
                />
                 {errors[key] && <span className="error-message">{errors[key]}</span>}
                </div>
            ) : (
                <button
                    className="form-button"
                    key={key}
                    type="button"
                    onClick={(e)=> handleSubmit(e,props[key].buttonType)}
                >
                    {props[key].buttonText}
                </button>
                )
            )}
        </form>
            {message && <div className="success-message">{message}</div>}
        </div>
    );
}

export default CustomForm;

