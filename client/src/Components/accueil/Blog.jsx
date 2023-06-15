import React from 'react'
import Entet from './Entet'
import Nav from './Nav'
import "./blog.css";
import Slider2 from './Slider2'

const Blog = () => {
  return (
    <div >
      <div className='header'>
      <Entet/>
      <Nav />
      </div>
      <Slider2/>
      <div className="prag">
            <p>
              The term perfume comes from the Latin “per fumum” which means
              “through the smoke”. It comes from the use of oils and aromas,
              such as incense. The perfume was burned as an offering to the
              deceased and to the deities. Even today, the fragrance permeates
              meditation and prayer in many religious cults.
            </p>
            <p>
              The perfume was then used for profane purposes, to be in harmony
              with oneself, to procure pleasure, to give confidence or to
              seduce. It speaks for itself, it is the result of a unique alchemy
              between its skin and its perfume. I like to say that it is not the
              perfume that perfumes the person, but the person who perfumes his
              perfume.
            </p>
          </div>
            <div className='titre'>
            <h1>Perfume trends</h1>
            <p>What are the perfume trends? What perfume to wear this summer? 
              Fresh or pronounced fragrance, gourmet or sexy,
               we tell you everything to bring your scent up to date. 
               Also find the favorite perfumes of French women as well as new perfumes. 
               Bold, mysterious, seductive, find the perfume that suits you in our selection. 
              And if you're wondering, find out what men think of our perfume.</p>
            </div>
            <div> 
            <img src="https://cache.cosmopolitan.fr/data/photo/w680_h340_ci/6k/parfums-fe-te-des-pe-res.webp"/>;
            </div>
    </div>
  )
}

export default Blog