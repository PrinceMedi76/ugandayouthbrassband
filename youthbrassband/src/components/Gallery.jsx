import Navbar from '../components/Navbar'
import {motion} from "motion/react"

const Gallery = () => {
  return (
    <>
    <Navbar />
      <div className="gallery">
         <div className='welcome'>
            <h>Uganda Brass Band</h>
            <p>Gallery</p>
          </div>
      </div>
      <motion.div
      initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}>
        <section>
        <div className='images'>
          <img src='../images/img1.jpg' alt='mm' className='w-80 h-80 rounded-2xl'/>
          <img src='../images/img2.jpg' alt='mm' className='w-80 h-80 rounded-2xl'/>
          <img src='../images/img3.jpg' alt='mm' className='w-80 h-80 rounded-2xl'/>
          <img src='../images/img4.jpg' alt='mm' className='w-80 h-80 rounded-2xl'/>
          <img src='../images/img5.jpg' alt='mm' className='w-80 h-80 rounded-2xl'/>
          <img src='../images/img6.JPG' alt='mm' className='w-80 h-80 rounded-2xl'/>
        </div>
      </section>
      </motion.div>
    </>
  )
}

export default Gallery
