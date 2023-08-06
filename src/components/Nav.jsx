import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
    <div className='Nav'>
        <div className='logo'>
            <Link to='/'><h1>EK-FARM</h1></Link>
        </div>
        
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Sign Up</Link></li>

        
        
        
        
        
        
        
      </ul>
    </div>
    </>
  )
}
