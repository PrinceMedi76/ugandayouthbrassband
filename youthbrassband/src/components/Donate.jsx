import React from 'react'

const Donate = () => {
  return (
    <div className='container donate'>
      <div className='container button'>
        <button type="button" className="donate-btn">Donate 🤍</button>
      </div>
        <div class='container donate-welcome'>
            <h1 className='text-black bg-white'>Welcome to </h1><br/>
            <h2 className='text-yellow-500'>Uganda Youth</h2>
            <h3 className='text-red-500'>Brass Band</h3>
        </div>
        <div className='container'>
          <h class='center'>Community Based Organization - CBO - Wakiso District</h>
        </div>
        <div className='donate-up'>
            <div>
              <h class='fg-success fw-bold'>Our Vision : <span class='fg-white fw-lighter'>To be the leading youth brass band organization in Uganda nurturing talent for global stages.</span></h>
            </div>
            <div>
              <h class='fg-success fw-bold'>Our Mission : <span class='fg-white fw-lighter'>To empower youth through music education, life skills, and community services</span></h>
            </div>
        </div>
    </div>
  )
}

export default Donate
