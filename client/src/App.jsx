// npm install
// npm install react-router-dom react-toastify 
//npm install @clerk/clerk-react
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<BuyCredit/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
