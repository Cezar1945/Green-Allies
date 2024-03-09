import React from 'react';
import './Blocks.css';

function Blocks() {
  return (
    <div className="text-block">
      <div className="card-container">
      <div className="card-img-wrapper"><span className="icon"> <i class="fas fa-hiking"></i> </span> </div>
        <h4> UN Environment Programme  </h4>
        <h6 className="card-description"> </h6>
        <a href="https://www.unep.org/eco-innovation"> Link </a>
        <img className="image-size" src="./images/Banner.jpg" alt="UNEP" />
      </div>
   

    <div className="card-container">
    <div className="card-img-wrapper"><span className="icon"><i class="fas fa-mountain"></i></span> </div>
      <h4 > World Environment Situation Room </h4>
      <h6 className="card-description"> The WESR is the new UNEP data, information and knowledge platform providing users access to validated content to support environmental decision. </h6>
    </div>
    

    <div className="card-container">
      <div className="card-img-wrapper"><span className="icon"> <i class="fas fa-campground"></i> </span> </div>
      <h4> Global Cooling Watch 2023  </h4>
      <h6 className="card-description">The Global Cooling Watch report demonstrates the potential and the pathways to achieve near-zero emissions from cooling. </h6>
   
    </div>

    <div className="card-container">
    <div className="card-img-wrapper"><span className="icon"> <i class="fas fa-child"></i> </span> </div>
      <h4> InforMEA</h4>
      <h6 className="card-description"> InforMEA provides easy access to treaty texts and provisions of decisions and resolutions adopted by the Governing Bodies of MEAs.  </h6>
    </div>
  
  </div >


   
  );
}

export default Blocks;
