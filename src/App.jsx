import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Product from './components/Product';
import Services from './components/Services';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Missing from './components/Missing';
import { Route, Routes, useNavigate} from 'react-router-dom';
 

function App() {

  const Navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const ProtectedRoute = ({path, element}) => {
    return isLoggedIn ? element : <Navigate to="/login" />
  }

  //If you're logedin, it load and cross check your details. You'r good to go if it recognize you  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if(user) {
      setIsLoggedIn(true)
    }
  }, []);
  
   

  return (
    <div className='App'>
      <Nav />
      <Routes>  
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Product />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/login' element={<Login />} /* element={isLoggedIn ? <Navigate to='/'/> : <Login onLogin={handleLogin} />} */ />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='*' element={<Missing />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
