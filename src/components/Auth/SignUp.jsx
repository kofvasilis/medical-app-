import { TextField , Button} from '@mui/material'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../config/firebase'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((UserCredential) => {
                console.log(UserCredential)
            }).catch((error) => {
                console.log(error)
            })

    }
    return (
        <div className='sign-up-container'>
            <form onSubmit={signUp}>
                <h1>Create an Account</h1>
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

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp