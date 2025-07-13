import React from 'react'
import { SignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Header from '../components/Header/Header';

function Login() {
  return (
    <div>
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
    </div>
  )
}

export default Login