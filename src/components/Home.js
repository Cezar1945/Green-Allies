import React from 'react';
import '../App'
import { Link } from 'react-router-dom';
import './Header.css';
import './Footer';
import Footer from './Footer';
import Header from './Header';
import Form from '../pages/ContactComp';
function Home() {
  return (
<div>
<Header />


    
<div className="header-logo clearfix">

      <span className="header-icon"><i className="fas fa-hiking"></i></span>
        <span className="text-align">   ECOINNOVATION </span>
      <nav className="header-nav">
        
  <Link className="header-nav-link" to="/">
          Log out
        </Link>

 </nav>
 </div>
 <Form />
 <Footer />
    </div>
    
  );
}




export default Home;
