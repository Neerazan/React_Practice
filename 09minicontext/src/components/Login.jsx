import React, { useState, useContext } from "react"
import UserContext from "../context/UserContext"

function Login() {
    const [username, setUsername] = useState("")
    const [password, sestPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => sestPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
