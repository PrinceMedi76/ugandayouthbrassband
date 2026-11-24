import Navbar from '../components/Navbar'
import {motion} from 'motion/react'

const AboutD = () => {
  return (
    <div className='aboutD'>
      <Navbar />
      <div className='about-head'>
                <div className="card">
                    <div className="card-body">
                        <img src="/images/DIR DENNIS WASSWA.jpg" className="card-img" alt="..." />
                        <h5 className="mt-2 mb-0 text-center fw-bold">DIRECTOR DENNIS WASSWA</h5>
                        <small className="fg-3 text-center text-white">Founder / Director of Music / Bandmaster</small>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title text-center fw-bold">
                            <h className='text-2xl font-bold text-white font-Quicksand'>Uganda Youth Brass Band</h>
                        </div>
                        <div className="card-text">
                            <h className='font-bold text-x1 text-red-300 font-sans'>
                              Dennis Wasswa is the Founder, Director of Music, and Bandmaster of Uganda Youth Brass Band (UYBB).
                            </h><br/>
                            <p>
                              Dennis believes that music can change lives. His work is focused on helping disadvantaged members
                              realize their full potential, stay focused, and grow into responsible leaders who contribute
                              to national development through disciplined brass music education and community service.
                            </p><br/>
                            <p>
                              He founded UYBB in March 2024 with only 7 instruments and a dream. Today, through discipline, love, and hard work with no time to relax,
                              he leads 102+ members in Namalere and Luzira toward the global stage.
                            </p><br/>
                            <h className='font-bold text-lg text-red-300 font-sans'>My name is Dennis Wasswa, also known as Legend Trumpeter.</h>
                            <p>
                              I started Uganda Youth Brass Band in March 2024, in Namalere, Wakiso District, Uganda, with only 7 instruments: 4 trumpets, 1 trombone, 1 euphonium, 1 tenor horn, and 1 Balton. That was all we had. No money. No practice space of our own. No uniforms. Just hope.
                            </p><br/>
                            <p>
                              Today, by effort and hard work, with no time to relax, we have grown to 13 instruments and 102+ members: 50+ in Namalere and 52+ in Luzira, Kampala
                            </p><br/>
                            <p>
                              I am a Trumpet Player and a Bandmaster. I teach trumpet, trombone, euphonium, tenor horn, Balton, and saxophone. I teach music reading, brass technique, marching, discipline, and leadership
                            </p><br/>
                            <p>
                              I lead rehearsals, arrange music, conduct the band on stage, and mentor our members to become leaders in their families and communities.
                            </p><br/>
                            <p>
                              Our members are coming from poor backgrounds, from families with no hope. Many walk a very long distance to come for practice. Some come hungry. Some come without shoes. But when they hold an instrument, their eyes light up. When they play together, they forget their pain and they feel proud, loved, and valued.
                            </p><br/>
                            <p>
                              We gave them hope. We gave them a place where they are loved, where they are seen, and where they matter.
                            </p><br/>
                            <p>
                              Under my leadership, our Luzira Branch played their FIRST SONG in November 2026, From Zero To Something. They played with a beautiful melody, and the sound of the horns was so perfect. They made Luzira very beautiful. They proved that with love and discipline, zero can become something beautiful.
                            </p><br/>
                            <p className='vision-p'>
                              My vision is: We Raise Talents, Building Futures and Community Development. In Unity We Stand.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div 
            initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.6}}>
              <section className='d-page'>
                <div className='container'>
                  <h1>Certificate - Official African Youth Band Partner of Sounds Of Brass Radio, UK, SME Awards Winner 2026</h1>
                  <p>
                    Presented by Chris, Radio presenter and producer of Sounds Of Brass.
                    I have attached this certificate to this email. Please add the certificate photo to my page.
                  </p>
                  <p>
                    Our Listed page: <a href='https://www.sounds-of-brass.co.uk/african-youth-band-partner'> Page Link</a>
                  </p>
                  <p>Our Partner's page: <a href='https://www.sounds-of-brass.co.uk'>Page Link</a></p>
                  <p>This partnership is proof that our hard work, discipline, and dedication are being recognized beyond Uganda, in the UK and around the world.</p>
                  <h1>Featured 2 Times in Drum Corps World Magazine, USA</h1>
                  <p>UYBB has been featured 2 times in Drum Corps World Magazine, USA.</p>
                  <div>
                    <h>First Feature:</h>
                    <p>Vol 55 No 6, July 2026, page 33
                       We were first featured by the late Steve Vickers, a well known Drum Corps publisher. May his soul rest in peace. He believed in us, Uganda Youth Brass Band (UYBB), when many did not know us. He gave our story a voice in America. We will always remember him.
                    </p>
                    <h1>Second Feature:</h1>
                    <p>
                      1 November 2026, Vol 55, No 13, pages 38 to 41
                      Our second feature was published by Mr. Gary J Dickelman, who took up the part of the late Mr. Steve Vickers to continue with the work of the late Steve Vickers. We really appreciate his effort as well.
                      He kept the light burning and he kept believing in UYBB.
                    </p>
                    <p className='text-green-500'>
                      Magazine Link : <a href='https://www.drumcorpsworld.com/viewer/default.html?pdf=November-01-2026-v55n13.pdf#article=uganda-youth-brass-band-update&p=38'>Link address</a>
                    </p>
                    <p className='text-green-500'>
                      Drumcorpsworld Link : <a href='https://www.drumcorpsworld.com/2026/11/uganda-youth-brass-band/'>Link address</a>
                    </p><br/>
                    <h className='text-center font-bold text-md text-[#0bbee6]'>"From a small ground in Namalere to a magazine in America, and to a radio in the UK, our story is now touching the world."</h>
                  </div>
                </div>
              </section>
            </motion.div>
    </div>
  )
}

export default AboutD
