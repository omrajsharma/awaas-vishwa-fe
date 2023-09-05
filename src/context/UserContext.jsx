import React, { createContext, useState, useEffect } from 'react'
export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        fetch(`https://awaas-vishwa-be.onrender.com/api/v1/auth/profile`, {
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => setUserInfo(data.data))
    }, [])

    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}