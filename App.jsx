
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Headerpage from './Components/Headerpage'
import Login from './Components/Login'
import Register from './Components/Register'
import Account from './Components/Account'


function App() {
 

  return (
    <>
   <Routes>
   <Route path='/' element={<Headerpage/>}/>
   <Route path='login' element={<Login/>}/>
   <Route path='register' element={<Register/>}/>
   <Route path='account settings' element={<Account/>}/>
    
   </Routes>
    </>
  )
}

export default App
