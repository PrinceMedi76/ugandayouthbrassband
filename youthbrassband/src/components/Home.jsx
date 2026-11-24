import {motion } from "motion/react"

const Home = () => {
  return (
      <div className="home text-white">
          <motion.div 
            initial={{opacity:0, y:90}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.4}}>
        <div className="container vision">
            <div className="flex-3">
              <h1>Uganda Youth Brass Band is a community Based Organization - CBO - Wakiso District</h1><br/>
              <h className='text-2xl fw-bold font-bold'>Our Vision</h>
              <p className=' font-normal text-lg'>A transformed Uganda where disadvantaged youth realize their full potential, lead with integrity and contribute to national
                 development through disciplined Brass music education and community service.</p><br/>
              <h className='text-2xl fw-bold font-bold'>Our Mission</h> 
              <p className='text-lg fw-nomal'>To empower vulnerable youth aged 8 - 25 in Wakiso District and beyond by providing free, structured brass music education, mentorship and performance opportunities that foster discipline, self-worth, academic excellence and civic responsibility
                 thereby reducing youth idleness and building future community leaders.</p>
            </div>
            <div className="flex-2 photo">
              <img src="/images/logo.jpg" className="img-thumbnail h-90 w-90" alt="..."></img>
            </div>
        </div>
      </motion.div>
        <motion.div 
    initial={{opacity:0, x:70}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.6}}>
        <div className='container'>
          <div className='home-images'>
            <div className="home1">
              <img src="/images/img3.jpg" className="img-thumbnail h-110 w-110" alt="..."></img>
            </div>
            <div className='home2 text-2xl leading-7'>
              <h1 className='pra'>Practices</h1>
              <p className='font-normal text-2xl leading-8'>Practices with our children that have got experience in different instruments.</p><br/>
              <p className="font-normal leading-8 text-2xl">Children are free to learn any instrument depending on their love for it and passion.</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div 
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6}}>
        <div className="side">
          <div className="side1 text-start w-90 ">
            <h1>We work across Uganda to save children's lives, defeat poverty,
               and achieve social justice.</h1><br/>
            <p className="font-normal text-xl leading-8"> Uganda Youth Brass Band is dedicated to empowering vulnerable children in Uganda by providing a safe haven, holistic education, and the tools they need to reach their 
              full potential. We believe every child deserves the opportunity to thrive, 
              and through our programs, we aim to break the cycle of poverty, 
              neglect, and abuse.</p><br/>
            <p className="font-normal text-xl leading-7">Uganda Youth Brass Band offers a comprehensive approach to child welfare,
               addressing not just basic needs but also fostering long-term growth.</p>
          </div>
          <div className="lives text-5xl w-90 h-90">
            <p className="text-red-600">Changing Children lives through Music</p>
          </div>
        </div>
      </motion.div>
      <motion.div
      initial={{opacity:0, x:70}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.6}}>
        <div className="side">
          <div className="side1 mb-10 flex-2 font-normal text-xl leading-8">
            <h1 className="">Music Lessons</h1>
            <p>Ms Sara Gmeinwieser from Germany training with our children at Uganda youth Brass Band in music reading classes.</p><br/>
            <p>Our children are being advanced in sight reading like professional personnels</p>
          </div>
          <div className="flex-3">
            <img src="/images/white2.jpeg" alt=".." className="w-100 h-100 rounded-2xl" />
          </div>
        </div>
      </motion.div>
      <motion.div>
        <div className="side">
          <div className="flex-2">
            <img src="/images/img4.jpg" alt=".." className="imm"/>
          </div>
          <div className="side1 mb-10 flex-3 font-normal text-xl">
            <h1 className="text-4xl">Your Support Changes</h1>
            <h2>Children's Lives</h2>
            <p className="font-semibold text-md">To our amazing Uganda Youth Brass Band family — from the bottom of our hearts, THANK YOU.💛</p><br/>
            <p className="leading-8">Our children are sending their warmest love and deepest appreciation to each and every one of you who stands with us in this life-changing mission. Whether you're following our page, leaving kind comments, liking, sharing our posts,
               or most importantly — donating — you are making a real difference.</p><br/>
            <p className="mm">We want you to know that we never take your kindness for granted. Your support is not just appreciated, it's essential. Our organization is powered 100% by donations, and without your generosity, we simply could not do what we do.</p>
          </div>
        </div>
      </motion.div>
      <motion.div>
        <section>
          <div>
            <h5>What we do</h5>
            <h2>Uganda Youth Brass Band Projects</h2>
            <p>At UYBB, we're committed to creating lasting change in communities through targeted
              programs that address critical needs. Our initiatives focus on providing
               immediate relief while building foundations for sustainable development.</p>
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default Home
