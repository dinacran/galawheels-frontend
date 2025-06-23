import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/Home/HomePage.jsx'
import VehiclePage from './components/VehiclePage/VehiclePage.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicle/:id" element={<VehiclePage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
