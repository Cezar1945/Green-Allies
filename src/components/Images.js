import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
};

const slideImages = [
  {
    url: 'https://img.freepik.com/free-vector/flat-ecology-social-media-cover-template_23-2149898109.jpg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5_-MqwAtHbJ50psnY7RR8ypqA0A_w3JNAhfc7T8Y_DDq-bnSmN-ixLqZRJQk3zkmyA0&usqp=CAU'
  },
  {
    url: 'https://img.freepik.com/free-vector/hand-drawn-ecology-concept-twitch-banner_23-2149865919.jpg'
  },
];

const Images = () => {
    return (
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }} />
            </div>
          ))} 
        </Slide>
      </div>
    )
};

export default Images;
