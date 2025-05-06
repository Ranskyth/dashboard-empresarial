"use client"

import { createContext, ReactNode, useState } from "react";

interface IAuth{
    auth:boolean
    setAuth: (value: boolean) => void
}

export const authContext = createContext({} as IAuth)

export const AuthContextProvider = ({children}:{children:ReactNode}) => {
    const [auth, setAuth] = useState<boolean>(false)

    return <authContext.Provider value={{auth, setAuth}}>{children}</authContext.Provider>
}