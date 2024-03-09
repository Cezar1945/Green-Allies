import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blocks from '../components/Blocks';
import Images from '../components/Images';
import Vreme from '../components/Vreme';
import Game from '../components/Game';
import EcoText from '../components/EcoText';
import './Homepage.css';

function Homepage() {
  const [animationOn, setAnimationOn] = useState(true);

  const toggleAnimation = () => {
    setAnimationOn(!animationOn);
  };

  return (
    <div className="homepage">
      <Header />
      <div className="background-animation" style={{ display: animationOn ? 'block' : 'none' }}>
        {}
      </div>
      <div className="animation-button">
        <button onClick={toggleAnimation}>{animationOn ? 'Turn Off Animation' : 'Turn On Animation'}</button>
      </div>
      <Images />
      <Blocks />
      <Vreme />
      <EcoText />
      <Game />
      <Footer/>

      
    </div>
  );
}

export default Homepage;
