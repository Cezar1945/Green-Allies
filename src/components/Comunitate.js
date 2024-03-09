// RecyclingCommunity.js

import React from 'react';
import './Comunitate.css'; // Corrected import statement
import { Link } from 'react-router-dom';


const Coumunitate = () => {
  return (
    
    <div className="recycling-community">
      <h1>Welcome to Our Recycling Community</h1>
      <div className="community-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
          urna nec ex euismod efficitur. Cras vulputate lorem in libero
          consectetur, vel sollicitudin metus ultrices.
        </p>
        <Link  to="/login" >
          Join Us 
        </Link>
      </div>
      <div className="community-images">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.metalmenrecycling.com.au%2F4-ways-to-encourage-recycling%2F&psig=AOvVaw2LpaJA0eUKrKnFt6OHWZvl&ust=1709199063473000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDBkY3dzYQDFQAAAAAdAAAAABAR" alt="Community Image 1" />
        <img src="image2.jpg" alt="Community Image 2" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Coumunitate;
