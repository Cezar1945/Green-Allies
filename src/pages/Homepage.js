import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blocks from '../components/Blocks';
import Images from '../components/Images';

function Homepage() {
  return (
    <div>
     <Header />
    
      <Images />
      <Blocks />
      ,
       <Footer />
    </div>
  );
}

export default Homepage;
