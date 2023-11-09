import { useState } from 'react'

import './App.css'
import DetailsCountry from './components/DetailsCountry'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>

     <Route index element={<Home/>}/>
     <Route path='/detailsCountry/:name' element={<DetailsCountry/>}/>
    </Routes>
    </>
  )
}

export default App
