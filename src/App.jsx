import React from 'react'
import Navbar from './components/Navbar'
import Meal from './components/Meal'
import Detail from './components/Detail'
import { Route,Routes } from 'react-router'

const App = () => {
  return (
    <div className=' bg-gradient-to-b from-orange-300 to-orange-700 m-0'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meal/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App
