import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { BiSolidUser } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';
import { FaUnlock } from 'react-icons/fa';

import { MdVisibility, MdVisibilityOff } from 'react-icons/md';


export default function Register({}) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('')
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      }

    const handleSubmit = async(e) => {
        e.preventDefault();

        //! faill fast. If username and password does not match, then throw err. 
        if(!email || !email) {
            setError('Please fill the fields');
            return;
        }
       
            //getItem is 1 of the 4 propertices of localstorage
            //JSON.parse helps to pass data in a JSON format
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

            //find is attach to the localstorage, and it take the call back function
        const user = existingUsers.find(user => user.username === username);

            //If the username is already exist
        if(user) {
            setError('User already exist');
            return;
        }

        const newUser = {
            email, password
        }
            //setItem is 1 of the 4 properties of localStorage.
            //JSON.stringify helps to structure data verywell.
            //JSON.parse helps to convert any data that's not in JSON back to JSON.
            //After the form is successfully registered, then navigate to login page.
        localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
        navigate('/login');
            //Your users and existingUsers must tally with your login
            //Okay?
    }

  return (
    <div className='Register'>
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit}>
      <div>
            <div className='user'><MdEmail /></div>
            <input 
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        
        <div>
            <div className='user'><FaUnlock /></div>
            <div className='user2' onClick={togglePasswordVisibility}>{showPassword ? <MdVisibilityOff /> : <MdVisibility />}</div>
        <input 
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div>

            
        <div className='user'><FaUnlock /></div>
            <div className='user2' onClick={togglePasswordVisibility}>{showPassword ? <MdVisibilityOff /> : <MdVisibility />}</div>
        <input 
            type={showPassword ? 'text' : 'password'}
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            
        />
        </div>
        {error && <p>{error}</p>}
        <button type='submit'>Register</button>
        <div className='register-link'>
            <p><Link to='login'>Tregister as a farmer</Link></p>
        </div>
        <div className='register-link'>
            <p>Have an account? <Link to='login'>Login</Link></p>
        </div>
        
      </form>
    </div>
  )
}
