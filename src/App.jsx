import { useState } from 'react'
import './App.css'
import CountriesContainer from './containers/CountriesContainer'
import VisitedCountryComponent from './components/VistedCountryComponent'

function App() {

  return (
    <>
      <div>
         <CountriesContainer/>
      </div>
      
      <div>
         <VisitedCountryComponent/>
      </div>
      
    </>
  )
}

export default App
