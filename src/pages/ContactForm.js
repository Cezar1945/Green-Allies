import React from 'react';
import Header from '../components/Header';


const styles = `
  .container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 150px; /* Reglează înălțimea câmpului de text */
}

.btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}
`;
function ContactForm() {
  return (
    <div>
      <Header /> 
      <form action="https://formsubmit.co/cezarmanea22@gmail.com" method="POST">
      <div className="container">
        <h2>Formular de Contact</h2>
        <div className="form-group">
          <label htmlFor="nume">Nume:</label>
          <input type="text" id="nume" name="nume" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subiect">Subiect:</label>
          <input type="text" id="subiect" name="subiect" required />
        </div>
        <div className="form-group">
          <label htmlFor="mesaj">Mesaj:</label>
          <textarea id="mesaj" name="mesaj" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn">Trimite</button>
        </div>
      </div>
    </form>
    </div>
  );
}

export default ContactForm;
