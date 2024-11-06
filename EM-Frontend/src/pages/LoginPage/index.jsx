import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './index.css'

const LoginPage = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="login-container">
            <h1>Event Management</h1>
            <p>Plan your events with Us.</p>
            <button className="login-btn" onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    )
}

export default LoginPage