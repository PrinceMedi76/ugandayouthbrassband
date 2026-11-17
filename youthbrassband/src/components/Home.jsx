import {motion } from "motion/react"

const Home = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6}}>
      <div className="home">
        <div className="container vision">
            <div>
              <h className='fill-gray-700 fw-bold text-3xl'>Uganda Youth Brass Band is a community Based Organization - CBO - Wakiso District</h><br/>
              <h className='text-lg fw-bold'>Our Vision</h>
              <p className='text-2xl fw-normal'>To be the leading youth brass band organization in Uganda nurturing talent for global stages.</p><br/>
              <h className=' fw-bold'>Our Mission</h> 
              <p className='text-2xl fw-nomal'>To empower youth through music education, life skills, and community services</p>
            </div>
            <div className="bg-green-700 photo">
              <img src="/images/logo.jpg" className="img-thumbnail h-90 w-90" alt="..."></img>
            </div>
        </div>
        <div className='container'>
          <div className='home-images flex flex-direction-row gap-50'>
            <div>
              <img src="/images/img5.jpg" className="img-thumbnail h-80 w-80" alt="..."></img>
            </div>
            <div className='text-4xl'>
              <h1 className='pra font-medium text-center text-blue-800'>Practices</h1>
              <p className='pra-text'>Director and Instructor, leading practices <br/> at the training ground</p>
            </div>
          </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Home
