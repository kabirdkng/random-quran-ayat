import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuoteBox from './components/QuoteBox'

function App() {

  return (
      <div className='main' id='wrapper'>
        <QuoteBox />
      </div>
  )
}

export default App
