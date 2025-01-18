// import React from 'react'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import PlayReel from './Components/PlayReel'
import Work from './Components/Work'

const App = () => {
  return (
    <div className='w-full '>
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
    </div>
  )
}

export default App