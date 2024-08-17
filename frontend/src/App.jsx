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
    <div className="w-full min-h-screen relative bg-[url('./images/MainSorry.png')] bg-blend-soft-light bg-cover bg-repeat-y bg-gray-300">
        <NavBar onSignInClick={handleSignInOpen}/>
        {/* <Home /> */}
        {isSignInOpen && (
          <div className="">
            <SignIn onClose={handleSignInClose}/>
          </div>
        )}
    </div>
  )
}

export default App