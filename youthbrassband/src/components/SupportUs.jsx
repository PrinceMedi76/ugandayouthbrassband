import React from 'react'
import Navbar from "../components/Navbar"
import {motion} from "motion/react"
import {Link} from "react-router-dom"

const SupportUs = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}>
      <div className="supportus">
        <Navbar />
         <section className='container support'>
            <h1>Support Us</h1>
            <h1>We need Your Support</h1>
          </section>
          <div className='home-btns'>
              <Link to=''>
                <button type="button" className='home-btn' id="btn-donate">Donate Now 🤍</button>
              </Link>
              <Link to=''>
                <button type="button" className='home-btn' id="btn-involve">Support Us</button>
              </Link>
          </div>
          
      </div>
    </motion.div>
  )
}

export default SupportUs
