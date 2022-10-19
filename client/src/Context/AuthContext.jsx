import React, {useState, useEffect, createContext} from 'react'

export const AuthContext = createContext();

function AuthProvider({children}){
    const [auth, setAuth] = useState(false)
    const [role, setRole] = useState("")
    const [user, setUser] = useState({})
    const name = "Keenan"
    const id = "5"


    return(
        <AuthContext.Provider value={{auth, setAuth, name, role, setRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider