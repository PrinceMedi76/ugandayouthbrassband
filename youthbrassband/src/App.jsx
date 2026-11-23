
import Donate from './components/Donate'
import Footer from './components/Footer'
import { Route, Routes}  from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import NewStories from './components/NewStories'
import Gallery from './components/Gallery'
import AboutD from './components/AboutD'

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
        <Route path='/newstories' element={<NewStories />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/aboutd' element={<AboutD />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
