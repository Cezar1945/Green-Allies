import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link din React Router
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <h3 className="content text1"> ECOINNOVATORS </h3>
      <div className="content text2">
        <p>More Info</p>
        {/* Utilizează componente Link pentru a naviga între pagini */}
        <Link to="/LearnAbout" className="sub"><h4> About us </h4></Link>
        <Link to="/ContactForm" className="sub"><h4> Contact us </h4></Link>

      </div>
      <div className="social-media">
        <p className="social-media-text">Social Media:</p>
        <a className="social-media-link" href="https://www.instagram.com/p/C4Bp4rONgQW/?igsh=Mmtvano2bzRpeHli" target="_blank" rel="noopener noreferrer">
          <img src="https://logolook.net/wp-content/uploads/2021/06/Symbol-Instagram-1536x864.png" alt="Instagram" className="social-media-icon" style={{ width: '30px', marginRight: '5px' }} />
          Instagram
        </a>
        <p></p>
        <a className="social-media-link" href="https://youtube.com/@Green._.Tech.2024?si=8Fmkk2haPzEgFUEl" target="_blank" rel="noopener noreferrer">
          <img src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png" alt="YouTube" className="social-media-icon" style={{ width: '20px', marginRight: '5px' }} />
          YouTube
        </a>
      </div>
    </div>
  );
}

export default Footer;
