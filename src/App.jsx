import { useState } from 'react'

import './App.css'
import Header from './components/Header';
import Feature1 from './components/Feature1';
import Features2 from './components/Features2';
import Features3 from './components/Features3';
import Pricing from './components/Pricing';
import WorldMap from './components/worldmap';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header />

     

     
    <Feature1 />
    <Features2 />
    <Features3 />
    <Pricing />
    <WorldMap />
    <Footer />

    
    </>
  )
}





export default App
