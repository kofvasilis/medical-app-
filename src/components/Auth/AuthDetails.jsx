import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom'


const AuthDetails = () => {

    const [authUser, setAuthUser] = useState(null)

    const navigate = useNavigate()
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                navigate('/home')
            }else {
                setAuthUser(null);
            }
        })
        return () => {
            listen();
        }
    
    }, [navigate])
    
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("sign out was succesfull")
        }).catch(error => console.log(error))
    }
    return (
        <div>
            
        </div>
    )
}

export default AuthDetails