import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Partners from './components/Partners'
import Stats from './components/Stats'
import OurPartner from './components/Our Partners'
import Footer from './components/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  

  return (
    <>
  <Navbar />
  <Main />
  <Partners />
  <Stats />
  <OurPartner/>
  <Footer />
    </>
  )
}

export default App
