import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Favorites from './views/Favorites'
import Home from './views/Home'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/favoritos" element={<Favorites/>}  />
      </Routes>
    </>
  )
}

export default App
