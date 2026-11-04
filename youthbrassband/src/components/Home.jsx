import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='container flex justify-between gap-5 max-w-full'>
                <div id="carouselExampleFade" class="carousel carousel-fade">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="/images/img1.jpg" class="d-block w-100 rounded-5" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="/images/img2.jpg" class="d-block w-100 rounded-5" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="/images/img3.jpg" class="d-block w-100 rounded-5" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="/images/img4.jpg" class="d-block w-100 rounded-5" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="/images/img5.jpg" class="d-block w-100 rounded-5" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="/images/img6.JPG" class="d-block w-100 rounded-5" alt="..."/>
                </div>
            </div>
            <div>
                <button class="btn-icon btn-sm" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-icon-prev" aria-hidden="true"></span>
                <span class="visually-hidden ">Previous</span>
                </button>
                <button class="btn-icon btn-sm " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-icon-next " aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            <div>

            </div>

      </div>
    </div>
  )
}

export default Home
