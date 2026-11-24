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
                        <img src="/images/logo.jpg" className="card-img" alt="..." />
                        <h5 className="mt-2 mb-0 text-center fw-bold">Uganda Youth Brass Band</h5>
                        <small className="fg-3 text-center text-white">Established, March 2024</small>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title text-center fw-bold">
                            <h1>Our Story: From 7 instruments to a Movement</h1>
                            <h1>Uganda Youth Brass Band (UYBB) is a member-led community organization base in Namalere, Wakiso District,
                                Uganda with a branch in Luzira, Kampala.
                            </h1>
                        </div>
                        <div className="card-text">
                            <p>
                                UYBB was established in March 2024. We started with almost nothing, only 7 instruments: 4 trumpets,
                                1 euphonium, 1 tenor horn, and 1 Balton.
                            </p><br/>
                            <p>
                                But we had something stronger than instruments. We had hope and discipline. We had members who were hungry
                                to learn, to belong and become better.
                            </p><br/>
                            <p>
                                Today, because of effort and hardwork, with no time to relax, we have grown to 13 instruments in total for 
                                both branches, and we serve 102+ members: 50+ in Namalere, Wakiso District at our main ground, and 52+ in 
                                Luzira, Kampala District Branch.
                            </p><br/>
                            <h1>Our Members: From No Hope to Hope</h1>
                            <p>
                                Our members are coming from poor backgrounds, from families with no hope. Imagine a family which 
                                Eats one meal aday. Imagine a member who goes to sleep hungry, but wakes  up early to walk a long
                                distance just to come and practice music.
                            </p><br/>
                            <p>
                                With Uganda Youth Brass Band, we gave them hope. We gave them a place where they are loved, where they
                                are seen and matter in anyways.
                            </p><br/>
                            <p>
                                Our aim to put them on the international stage, on the global stage. We want to give them hope, a future
                                to forget the struggle they went through. We want the world to recognise them not as poor members,
                                but as talented stars, as leader, as proud Ugandans playing on the world stage.
                            </p><br/>

                            <p>
                                Everyday, our members walk long distances just come and practice. Some come without shoes, others hungry
                                . Some come from homes where there is no hope. But when they hold an instrument, their eyes light up. When
                                they play together, they forget their pain and they feel proud, loved and valued as many people gather to 
                                see them playing music.
                            </p><br/>
                            <p>
                                Through UYBB, DEnnis trains, mentors, and guides our members aged 8 to 25 years in brass music, discipline
                                ,life skills, and leadership. Under his leadership, our members learn how to play trumpets, trombone, euphonium,
                                tenor horn and Balton. While also learning integrity, excellence, unity, respect and service.
                            </p><br/>
                            <p>
                                We are not just teaching music, but saving futures. We are keeping our members away from bad paths.
                                We are raising leaders who will serve Uganda with discipline and love.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <motion.div
        initial={{opacity:0, y:70}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.4}}>
            <section className="effort">
                <div>
                    <h1>Our Effort, Our Achievement</h1>
                    <p>Because of our effort and hard work, with no time to relax, we have achieved a lot in our organization, Uganda Youth Brass Band.
                        We are proud to be the Official African Youth Band Partner of Sounds Of Brass Radio, UK, SME Awards Winner 2026.
                        This partnership is proof that our hard work, discipline, and dedication are being recognized beyond Uganda, in the UK and around the world.
                    </p>
                    <h1>International Recognition</h1>
                    <p>UYBB has been featured 2 times in Drum Corps World Magazine, USA. You can read the full features on our Media and Press page.</p>
                </div>
            </section>
        </motion.div>
        <motion.div
        initial={{opacity:0, y:70}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.4}}>
            <section className="effort">
                <div>
                    <h1>International Promises and Friends</h1>
                    <p>
                        We are grateful for new friends who have promised to support UYBB,
                        including Arturo Sandoval Institute, USA, who gave us instruments from USA,
                        Mr. Gary J Dickelman, who promised us a bass Trombone, our ever first bass instrument in UYBB, and Mr. David Chadwick from UK, who is helping us on instruments.
                    </p><br/>
                    <p>
                        We are also grateful to B.A.C Music, Kansas City, USA, who is also willing to help us with instruments.
                        We are also grateful to Gramercy Brass Orchestra from New York, USA, who is also helping us with instruments.
                    </p><br/>
                    <p>
                        And we are deeply grateful to Ms. Johanntgen from Switzerland, 
                        a world class lady, who is also willing to help us with our first ever sax section 
                        in Uganda Youth Brass Band. This will be a new chapter for us, a new sound, a new hope
                         for our members to learn saxophone and to grow even more on the global stage
                    </p><br/>
                    <p>
                        They saw our struggle and they believed in us. Now we pray for more friends
                         like them to join us. What started with 7 instruments and a dream is now a movement of 102+ members,
                         recognized in the USA and UK. That is the power of discipline and unity
                    </p>
                </div>
            </section>
        </motion.div>
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
        initial={{opacity:0, y:70}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6}}>
            <div className='container'>
                <h className='member'>Uganda Youth Brass Band Team Members</h>
                <div className='about-avatar'>
                    <span>
                    <img className="avatar-img" src="/images/DIR DENNIS WASSWA.jpg" alt="mdo"/>
                    <h className='font-semibold flex justify-center text-white'>DENNIS WASSWA</h>
                    <p className="font-light flex justify-center text-white">Founder</p>
                    </span>
                    <span>
                    <img className="avatar-img" src="/images/logo.jpg" alt="mdo"/>
                    <h className='font-semibold flex justify-center text-white'>DENNIS WASSWA</h>
                    </span>
                    <span>
                    <img className="avatar-img" src="/images/DIR DENNIS WASSWA.jpg" alt="mdo"/>
                    <h className='font-semibold flex justify-center text-white'>DENNIS WASSWA</h>
                    </span>
                    <span>
                    <img className="avatar-img" src="/images/DIR DENNIS WASSWA.jpg" alt="mdo"/>
                    <h className='font-semibold flex justify-center text-white'>DENNIS WASSWA</h>
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
