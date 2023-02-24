import React from 'react'
import AuthDetails from '../components/Auth/AuthDetails'
import SingIn from '../components/Auth/SignIn'
import SignUp from'../components/Auth/SignUp'

function Login() {
  return (
    <>
      <div>
        <SingIn />
        <SignUp />
        <AuthDetails />
      </div>
    
    </>
  )
}

export default Login