import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
