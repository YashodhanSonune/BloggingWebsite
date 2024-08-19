import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SignIn from './components/SignIn'
import CategoriesBar from './components/CategoriesBar';
import Filler from './components/Filler';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignInOpen = () => {
    setIsSignInOpen(true);
  }

  const handleSignInClose = () => {
    setIsSignInOpen(false);
  }

  return (
    <div className="w-full min-h-screen relative bg-[url('./images/MainSorry.png')] bg-blend-soft-light bg-cover bg-repeat-y bg-slate-300">
        <NavBar onSignInClick={handleSignInOpen}/>
        <Filler />
        <CategoriesBar />
        <Filler />
        <div className="w-full min-h-screen bg-[url('./images/MainSorry.png')] bg-blend-soft-light bg-cover bg-repeat-y bg-slate-300">
          <Home />
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