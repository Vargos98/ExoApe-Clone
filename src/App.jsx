// import React from 'react'
import Footer from './Components/Footer'
import Images from './Components/Images'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import PlayReel from './Components/PlayReel'
import Spread from './Components/Spread'
import Work from './Components/Work'

const App = () => {
  return (
    <div className='w-full '>
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Spread />
      <Footer />
    </div>
  )
}

export default App