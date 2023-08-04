import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  const today = new Date();
  return (
    <footer className='Footer'>
        <div className='footer-menu'>
          <p>@{new Date().getFullYear()} EK-FARM. All right reserved.</p>
        </div>
        <div className='footer-menu-links'>
            <Link to='/'><p>Teams $ Conditions</p></Link>
            <Link to='/'><p>Teams $ Conditions</p></Link>
            <Link to='/'><p>Teams $ Conditions</p></Link>
            <Link to='/'><p>Teams $ Conditions</p></Link>
        
        </div>
      
    </footer>
  )
}

export default Footer