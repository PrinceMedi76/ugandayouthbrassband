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
            <h1 className="text-red-600"><span className="text-white">Welcome to</span> Uganda</h1>
            <h3 className="text-red-600">Youth Brass Band</h3>
          </section>
      </div>
    </motion.div>
  )
}

export default Donate
