import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Adddata from './components/Adddata'
import Homje from './components/Homje'
import Singaluser from './components/Singaluser'
import Updateuser from './components/Updateuser'


const App = () => {
  return (
  <Routes>

    <Route path='/' element={<Homje/>}/>
    <Route path='/addblog' element={<Adddata/>}/>
    <Route path='/user/:id' element={<Singaluser/>}/>
    <Route path='/useredit/:id' element={<Updateuser/>}/>
  </Routes>
  )
}

export default App