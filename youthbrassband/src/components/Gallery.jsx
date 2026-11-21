import Navbar from "./Navbar"
import {motion} from "motion/react"

const Gallery = () => {
  const images = [
    {id:1, src: "/images/whitetraining.jpeg", title: "Photo 1"},
    {id:2, src: "/images/img2.jpg", title: "Photo 2"},
    {id:3, src: "/images/img1.jpg", title: "Photo 3"},
    {id:4, src: "/images/img4.jpg", title: "Photo 4"},
    {id:5, src: "/images/white2.jpeg", title: "Photo 5"},
    {id:6, src: "/images/paradekids.jpeg", title: "Photo 6"},
    {id:7, src: "/images/img3.jpg", title: "Photo 7"},
    {id:8, src: "/images/img5.jpg", title: "Photo 8"},
    {id:8, src: "/images/img6.JPG", title: "Photo 9"}
  ]

  return (
    <div className="gallery">
      <Navbar />
      <div className="gallery-images">
        {images.map((images) => (
          <motion.div
          initial={{opacity:0, y:70}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.6}}>
            <div className="gallery-card" key={images.id}>
              <img src={images.src} alt={images.title} className="w-100 h-100 rounded-2xl"/>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

