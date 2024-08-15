import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SignIn from './components/SignIn'

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-200'>
      <NavBar />
      {/* <Home /> */}
      <SignIn />
    </div>
  )
}

export default App