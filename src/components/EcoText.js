

import React from 'react';
import './EcoText.css'; 

function EcoText() {
  return (
    <div className="eco-text-container">
      <div className="background-animation"></div>
      <h2>Join us in Protecting Our Planet</h2>
      <p className="intro-text">
        At Our Company, we are committed to promoting a sustainable future. 
        Through recycling and eco-friendly practices, we strive to minimize our environmental impact and preserve our planet for future generations.
      </p>
      <div className="highlights">
        <div className="highlight">
          <i className="fas fa-recycle"></i>
          <h3>Recycling Initiative</h3>
          <p>We actively participate in recycling programs to reduce waste and conserve resources.</p>
        </div>
        <div className="highlight">
          <i className="fas fa-leaf"></i>
          <h3>Eco-Friendly Products</h3>
          <p>Our products are designed with sustainability in mind, using recycled materials and environmentally friendly manufacturing processes.</p>
        </div>
        <div className="highlight">
          <i className="fas fa-globe"></i>
          <h3>Global Impact</h3>
          <p>By choosing eco-friendly options, together we can make a positive impact on the health of our planet and communities worldwide.</p>
        </div>
      </div>
    </div>
  );
}

export default EcoText;
