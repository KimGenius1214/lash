import { createContext, useEffect, useState } from 'react';

export const LoginAuth = createContext();

export default function LoginAuthContext({ children }){
    const [resData, setResData] = useState();

    return(
        <LoginAuth.Provider value={'LoginAuth'}>
            { children }
        </LoginAuth.Provider>
    )
}