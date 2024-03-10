import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://images.squarespace-cdn.com/content/v1/52f53adce4b0030add82ab9f/ba563c63-c22c-4212-b5e0-94c4af51a437/Eco-Header.jpg?format=1500w',
  },
  {
    url: 'https://www.rootsveyr.com/wp-content/uploads/2021/12/eco-farm.jpg',
    
  },
  {
    url: 'https://islandwatersportshhi.com/images/eco-tours-header.jpg',

  },
];

const Images = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
      

              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Images;