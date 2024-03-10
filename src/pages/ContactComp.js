import React, { useState } from 'react';
import Header from '../components/Header';
import './ContactForm.css';  // Import the styles file

function ContactForm() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <Header />
      
      <div className="challenge-description">
        <p>
          <strong>Welcome to ECOINNOVATION</strong>
          <p></p>
          <strong>Sign up now to save the planet!</strong> Participate in our daily challenges and be an environmental hero. Through simple actions, you can make a significant difference in the fight against climate change.
        </p>
        <p>
          <strong>Why should you join?</strong>
          <ul>
            <li>❖ Contribute to waste reduction and pollution;</li>
            <li>❖ Plant a tree for each completed challenge;</li>
            <li>❖ Save resources and energy every day;</li>
            <li>❖ Join the community that fights for a cleaner and healthier environment.</li>
          </ul>
        </p>
        <p>
          <strong>How it works:</strong> Fill out the form below with your name, email address, and a message. Furthermore, demonstrate your commitment by uploading a photo that reflects one of the completed daily challenges.
        </p>
        <p>
          <strong>Examples of daily challenges:</strong>
          <ul>
            <li>❖ Recycle waste according to local rules;</li>
            <li>❖ Plant flowers around your home and share the results;</li>
            <li>❖ Use a bike or walk instead of a car for a day;</li>
            <li>❖ Reduce water consumption during daily activities.</li>
          </ul>
        </p>
        <p>
          <strong>Reward your efforts!</strong>
          <p></p> By completing challenges, you will accumulate points. These points will give you the chance to win valuable vouchers or other surprise prizes. The more you get involved, the higher your chances of winning!
        </p>
      </div>

      <form action="https://formsubmit.co/cezarmanea22@gmail.com" method="POST">
        <div className="container">
          <h2>Contact Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="photo">Upload a photo:</label>
            <input type="file" id="photo" name="photo" accept="image/*" onChange={handleImageChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
