import { useState } from "react";
import React from 'react';
import "./login.css";

function SignInComponent(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [emailErrorS, setEmailError] = useState("");
    const [passwordErrorS, setPasswordError] = useState("");

    const handleEmailInputChange = function (e) {
        console.log("Hi from handleEmailInputChange");
        setEmail(e.target.value);
    }

    const handlePasswordInputChange = function (e) {
        console.log("Hi from handlePasswordInputChange");
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleRememberMeInputChange = function (e) {
        console.log("Hi from handleRememberMeInputChange");
        setRememberMe(!rememberMe);
    }

    const handleSubmit = function (e) {
        let emailError = "";
        let passwordError = "";

        if (!email) {
            emailError = "Email can't be empty";
        }
        if (!password) {
            passwordError = "Password can't be empty";
        } else if (password.length < 8) {
            passwordError = "Password should be at least 8 characters";
        }

        if (emailError || passwordError) {
            setEmailError(emailError);
            setPasswordError(passwordError);
            alert(JSON.stringify({ emailError: emailErrorS, passwordError: passwordErrorS }));
            e.preventDefault();
        } else {
            alert(JSON.stringify({ email: email, password: password, rememberMe: rememberMe }))
        }
    }

    return (
        <div class="form">
            <title>{"Sign In"}</title>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type={"text"}
                    value={email}
                    onChange={handleEmailInputChange}
                />
                <br></br>
                <label>Password: </label>
                <input type={"password"}
                    value={password}
                    onChange={handlePasswordInputChange}
                />
                <br></br>
                <label>
                    <input type="checkbox"
                        checked={rememberMe}
                        onChange={handleRememberMeInputChange}
                    />
                    Remember me
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SignInComponent;