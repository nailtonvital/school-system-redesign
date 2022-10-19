import React, {useState, useEffect, createContext} from 'react'

export const AuthContext = createContext();

function AuthProvider({children}){
    const [auth, setAuth] = useState(false)
    const name = "Nailton"

    return(
        <AuthContext.Provider value={{auth, setAuth, name}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider