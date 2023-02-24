import { TextField , Button} from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../config/firebase'

const SingIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((UserCredential) => {
                console.log(UserCredential)
                
            }).catch((error) => {
                console.log(error)
            })

    }
    return (
        <div className='sign-in-container'>
            <form onSubmit={signIn}>
                <h1>Sign-In</h1>
                <TextField
                    type='email' 
                    placeholder='Enter Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <TextField
                type='password' 
                placeholder='Enter Your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>

                <Button type='submit'>Log in</Button>
            </form>
        </div>
    )
}

export default SingIn