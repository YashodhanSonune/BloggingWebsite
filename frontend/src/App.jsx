import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SignIn from './components/SignIn'

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignInOpen = () => {
    setIsSignInOpen(true);
  }

  const handleSignInClose = () => {
    setIsSignInOpen(false);
  }

  return (
    <div className="w-full min-h-screen bg-zinc-200 relative">
      <div className={`${isSignInOpen ? 'blur-sm' : ' '}`}>
        <NavBar onSignInClick={handleSignInOpen}/>
        {/* <Home /> */}
      </div>
      {isSignInOpen && (
        <div className="">
          <SignIn onClose={handleSignInClose}/>
        </div>
      )}
    </div>
  )
}

export default App