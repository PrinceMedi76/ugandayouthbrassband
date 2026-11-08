import Navbar from './components/Navbar'
import Donate from './components/Donate'
import Footer from './components/Footer'
import { Route, Routes}  from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Donate />
            <Home />
          </>
        } />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
