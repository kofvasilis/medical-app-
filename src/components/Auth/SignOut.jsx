import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom'
import { Button} from '@mui/material'

const SignOut = () => {
    
    const [authUser, setAuthUser] = useState(null)

    const navigate = useNavigate()
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                
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
            navigate('/')
        }).catch(error => console.log(error))
    }
    return (
        <div>
            { authUser ? <>
                <div>
                    {`signed in as ${authUser.email}`}
                        <Button onClick={userSignOut}>
                            Sign Out
                        </Button>
                    </div>
                    </> : <h1>SIGNED OUT</h1>}
            </div>
    )
}

export default SignOut