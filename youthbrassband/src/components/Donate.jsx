import Navbar from "../components/Navbar"
import {motion} from "motion/react"
import {Link} from "react-router-dom"

const Donate = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}>
      <div className="homepage">
        <Navbar />
         <section className='container welcome'>
            <h className="welcome-h3"><span className="welcome-span">Welcome to</span> Uganda</h>
            <h className="welcome-h2">Youth Brass Band</h>
            <p>We Raise Talents, Building Futures and Community Development. In Unity We Stand.</p>
            <p>We started in March 2024 with only 7 instruments. Today we are a movement of 102+ members, recognized in the USA and UK.
               We are not just teaching music. We are saving futures</p>
          </section>
          <div className='home-btns'>
              <Link to=''>
                <button type="button" className='home-btn' id="btn-donate">Donate 🤍</button>
              </Link>
              <Link to=''>
                <button type="button" className='home-btn' id="btn-involve">Get Involved</button>
              </Link>
          </div>
      </div>
    </motion.div>
  )
}

export default Donate
