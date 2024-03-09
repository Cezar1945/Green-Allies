import React, { useState } from 'react';
import Header from '../components/Header';
import './ContactForm.css';  // Importă fișierul cu stiluri

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
    <strong>Bine ai venit al ECOINNOVATION</strong>
    <p></p>
    <strong>Înscrie-te acum pentru a salva planeta!</strong> Participă la chalengeurile noastre zilnice și fii eroul mediului înconjurător. Prin acțiuni simple, poți face o diferență semnificativă în lupta împotriva schimbărilor climatice.
  </p>
  <p>
    <strong>De ce să te înscrii?</strong>
    <ul>
      <li>❖ Contribuie la reducerea deșeurilor și a poluării;</li>
      <li>❖ Plantează un copac pentru fiecare chalenge îndeplinit;</li>
      <li>❖ Economisește resurse și energie în fiecare zi;</li>
      <li>❖ Alătură-te comunității care luptă pentru un mediu mai curat și sănătos.</li>
    </ul>
  </p>
  <p>
    <strong>Cum funcționează:</strong> Completează formularul de mai jos cu numele tău, adresa de email și un mesaj. Mai mult, demonstrează implicarea ta prin încărcarea unei poze care să reflecte unul dintre chalengeurile zilnice îndeplinite.
  </p>
  <p>
    <strong>Exemple de chalengeuri zilnice:</strong>
    <ul>
      <li>❖ Reciclează deșeurile conform regulilor locale;</li>
      <li>❖ Plantează flori în jurul casei tale și împărtășește rezultatul;</li>
      <li>❖ Folosește bicicleta sau mersul pe jos în loc de mașină pentru o zi;</li>
      <li>❖ Redu consumul de apă în timpul activităților zilnice.</li>
    </ul>
  </p>
  <p>
    <strong>Recompensează-ți eforturile!</strong>
    <p></p> Prin îndeplinirea chalengeurilor, vei acumula puncte. Aceste puncte îți vor aduce șansa de a câștiga vouchere valoroase sau alte premii surpriză. Cu cât te implici mai mult, cu atât șansele tale de a câștiga cresc!
  </p>
</div>

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
            <label htmlFor="poza">Încarcă o poză:</label>
            <input type="file" id="poza" name="poza" accept="image/*" onChange={handleImageChange} />
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