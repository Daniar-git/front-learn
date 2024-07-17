import { useState } from "react";

export const LoggedIn = () => {

    const [IsLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is logged {IsLoggedIn?"in" : "out"}</div>
        </div>
    )
}