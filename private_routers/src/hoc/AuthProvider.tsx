import React,{FC, createContext,ReactNode, useState} from 'react'
import { Iuser } from '../types/types'

// интерфейс
interface IAuthContext{
    user:Iuser,
    signin:(name: string, pass: string)=>void,
    signout:()=>void,
}
interface AuthProviderProps {children: ReactNode;}

// контекст
const AuthContext = createContext<IAuthContext>({ user: { name: '', pass: '' }, signin: () => {}, signout: () => {} })

//
const AuthProvider:FC<AuthProviderProps> = ({children}) => {

    const [user,setuser] = useState<Iuser>({name:'',pass:''})

    const signin =(name: string, pass: string)=>{
        setuser({name,pass})
    }
    const signout =()=>{
        setuser({name:'',pass:''})
    }

    console.log('user : ',user)
    return (
    <AuthContext.Provider value={{user,signin,signout}}>
        {children}
    </AuthContext.Provider>
    )
}

export {AuthProvider,AuthContext}