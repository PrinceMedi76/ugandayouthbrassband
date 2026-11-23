import Navbar from "../components/Navbar"
import {motion} from "motion/react"

const Donate = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}>
      <div className="homepage">
        <Navbar />
         <section className='container welcome'>
            <h1 className="welcome-h3"><span className="welcome-span">Welcome to</span> Uganda</h1>
            <h1 className="welcome-h2">Youth Brass Band</h1>
          </section>
          <div className='home-btns'>
            <div className='btns'>
              <button type="button" className='home-btn' id="btn-donate">Donate 🤍</button>
            </div>
            <div className='btns'>
              <button type="button" className='home-btn' id="btn-involve">Get Involved</button>
            </div>
          </div>
      </div>
    </motion.div>
  )
}

export default Donate
