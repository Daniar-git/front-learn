import { useState } from "react";

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    // const [user, setUser] = useState(null)
    // const [user, setUser] = useState<AuthUser | null>(null)
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'Daniyar',
            email: 'daniar.78@inbxo.ru'
        })
    }
    // const handleLogout = () => {
    //     setUser(null)
    // }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/*<button onClick={handleLogout}>Logout</button>*/}
            <div>User name is {user.name}</div>
        </div>
    )
}