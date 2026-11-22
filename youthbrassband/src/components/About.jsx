import Navbar from "../components/Navbar"
import {motion} from "motion/react"

const About = () => {
  return (
    <>
        <motion.div 
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.6}}>
            <div className='about'>
            <div className="container">
                <Navbar/>
            <div className='about-head'>
                <div className="card">
                    <div className="card-body">
                        <img src="/images/DIR DENNIS WASSWA.jpg" className="card-img" alt="..." />
                        <h5 className="mt-2 mb-0 text-center fw-bold">DIRECTOR DENNIS WASSWA</h5>
                        <small className="fg-3 text-center">Founder, March 2024</small>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title text-center fw-bold">
                            <h className='text-2xl font-bold font-Quicksand'>Uganda Youth Brass Band</h>
                        </div>
                        <div className="card-text text-center">
                            <p>
                                Uganda Youth Brass Band was founded in March 2024 by Dennis Wasswa, a passionate musician and educator.
                            It was created in a small community in Uganda called Namalere, Kagoma - Wakiso District. It started with one (1) drum
                            and Four (4) trumpets. The Founder, Dennis Wasswa with so many talents but idle youth in the community with no platform
                            to showcase their talents, decided to form a youth brass band where he believed music could change them, give them discipline,
                            hope and future.
                            </p>
                            <p>
                                In March 2024, with just those 4 trumpets and pure passion, we gathered the first group of children.
                            We had  no big hall, no full instruments but  just 4 trumpets, one drum and commintment. We started training under trees,
                            compands and small classrooms.
                            </p>
                            <p>
                                To make a great impact, we added more instruments and hired some drums. Those 4 trumpets plus thehired drums made a powerful sound
                            that called more youth to join the organisation. Month by Month, the sound grew louder and parents started believing and 
                            Schools started calling.
                            </p>
                            <p>
                                The youth became disciplined, confident and professional. we now own more instruments and the band keeps groing day by day.
                            Our Story attracted the world. We were featured in Drum Corps World Magazine, USA - Vol 55 No. 6 July 2026 by the late
                            Steve Vickers (RIP) who believed in Uganda Youth Brass Band.
                            </p>
                            <p>
                                And we are now proud to be the official African Youth Partner of Sounds Of Brass Radio, UK - Winner of Best Brass Band Radio
                            Station - SME UK Enterprise Awards 2026.
                            </p>
                            <p>
                                <span className='font-bold'>Verified here :</span> <a href='https://www.sounds-of-brass.co.uk/african-youth-band-partner'>Link for Verification</a><br/><br/>
                            </p>

                            <p>
                                Today, What started with 4 trumpets in March 2024, has become a movement. We are training in schools across Wakiso, performing
                            on big events, and inspiring hundreds of young Ugandan youth to choose music over the streets and bad community morals.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div>
        <section>
            <motion.div
            initial={{opacity:0, x:70}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.4}}>
                <div className='container'>
                <div className='about-c1'>
                    <div className='about-card'>
                        <p className='card-subtittle text-start  text-2xl font-normal leading-12 text-white'>
                            Uganda Youth Brass Band we teach children in schools across Wakiso District
                            how to play
                            trumpets, trombones, drums and Music reading. We provide trainers, instruments and training ground.
                        </p>
                    </div>
                    <div className='card flex-2 bg-transparent'>
                        <img src="/images/newlogo.png" class="img-fluid w-80 h-80" alt="..."></img>
                    </div>
                </div>
            </div>
            </motion.div>
        </section>
    </div>
    <motion.div
    initial={{opacity:0, x:70}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.4}}>
        <section className="partners">
            <div className="part flex justify-between align-baseline gap-30">
                <div className="">
                    <img src="/images/denni&white.jpeg" alt="..." className="w-80 h-70" />
                </div>
                <div className=" text-2xl flex-2 font-normal text-white">
                    <h1>Mr. Dennis Wasswa & Ms Sara Gmeinwieser</h1>
                    <p className="leading-12">We are deeply grateful to Ms. Sarah Gmeinwieser from Germany
                        for continuous support.
                    </p><br/>
                    <p className="leading-12">She came all the way from Germany and volunteered with us,
                        conducting a master class with Uganda youth children at Namalere.
                    </p>
                </div>
            </div>
        </section>
    </motion.div>
    <section>
        <motion.div
        initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6}}>
            <div className='container'>
        <div className='about-avatar'>
            <span>
              <img className="avatar-img" src="/images/Sounds.jpg" alt="mdo"/>
              <h className='font-semibold flex justify-center'>DENNIS WASSWA</h>
            </span>
            <span>
              <img className="avatar-img" src="/images/logo.jpg" alt="mdo"/>
              <h className='font-semibold flex justify-center'>DENNIS WASSWA</h>
            </span>
            <span>
              <img className="avatar-img" src="/images/DIR DENNIS WASSWA.jpg" alt="mdo"/>
              <h className='font-semibold flex justify-center'>DENNIS WASSWA</h>
            </span>
            <span>
              <img className="avatar-img" src="/images/DIR DENNIS WASSWA.jpg" alt="mdo"/>
              <h className='font-semibold flex justify-center'>DENNIS WASSWA</h>
            </span>
        </div>
    </div>
        </motion.div>
    </section>
        </div>
        </motion.div>
    </>
  )
}

export default About
