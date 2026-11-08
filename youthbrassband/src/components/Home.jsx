import React from 'react'

const Home = () => {
  return (
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
  )
}

export default Home
