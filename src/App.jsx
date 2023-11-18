import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import Notfound from './views/Notfound'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path= '*' element= {< Notfound />} />
      
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
