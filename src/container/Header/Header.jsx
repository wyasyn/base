import React from 'react'
import {images} from '../../constants';

const Header = () => {
 
  return (
    <header className='header'>
      <div className="col-1">
        <h1>
            <span className="title">
              We're
            </span>
            <br />

             coming <br /> soon
        </h1>
        <p>
        Hello fellow shoppers! We're currently building our new fashion store. 
        Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
        <form className="mail" onSubmit={(e) => e.preventDefault}>
          <input type="email" name="email" id="email" placeholder='Email Address' required />
          <button type="submit">
              <img src={images.arrow} alt="" />
          </button>
        </form>
      </div>
      <div className="col-2">
        <img className='desktop' src={images.heroD} alt="heroImage" />
        <img className='mobile' src={images.heroM} alt="heroImage" />
      </div>
    </header>
  )
}

export default Header