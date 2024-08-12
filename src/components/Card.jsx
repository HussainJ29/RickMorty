import React from 'react'
import RickImage from '../assets/rick.png';


const Card = ({image}) => {
  return (
        <div className='card'>
          <div className='img01'>
            <img src={image} alt="image" />
          </div>
          <div className="content">
            <div className='sec-1'>
              <a href="#"><h2>Name</h2></a>
              <span><a href="#">Alive-human</a></span>
            </div>
            <div className='sec-2'>
              <span>Last Known Location</span><br />
              <a href="#">Earth</a>
            </div>
            <div className='sec-3'>
              <span>First seen in:</span><br />
              <a href="#">Rixty Minutes</a>
            </div>

          </div>
        </div>
  )
}
export default Card