import { useState } from 'react';
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
   

  return (
    <div className='App'>
      <Nav />
      <Routes>  
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Product />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='*' element={<Missing />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
