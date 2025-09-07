import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './component/auth/Signup'
import Signin from './component/auth/Signin'
import Workspace from './component/workspace/Workspace'
import Dashboard from './component/dashboard/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/workspace' element={<Workspace />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App