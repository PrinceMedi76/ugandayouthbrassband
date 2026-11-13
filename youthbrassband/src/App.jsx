
import Donate from './components/Donate'
import Footer from './components/Footer'
import { Route, Routes}  from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import ContactUs from './components/ContactUs'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Donate />
            <Home />
          </>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
