import { createContext, useState } from "react";

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext
export {AuthContextProvider}