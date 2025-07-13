import React from 'react'
<<<<<<< HEAD
import { SignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
=======
>>>>>>> 2a07bbc6fae09d0b4fb4e7954bac7b4299f6deb4
import Header from '../components/Header/Header';

function Login() {
  return (
    <div>
<<<<<<< HEAD
        <SignedOut>
          <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '80vh',
            flexDirection: 'column'
          }}>
            <h1 style={{marginBottom: '2rem', color: '#333'}}>Welcome to eKart</h1>
            <SignIn routing="hash" />
          </div>
        </SignedOut>
        <SignedIn>
          <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '80vh',
            flexDirection: 'column'
          }}>
            <h1>Welcome back!</h1>
            <p>You are successfully signed in.</p>
          </div>
        </SignedIn>
=======
        <h1>Login</h1>
>>>>>>> 2a07bbc6fae09d0b4fb4e7954bac7b4299f6deb4
    </div>
  )
}

export default Login