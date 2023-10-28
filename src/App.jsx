import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
