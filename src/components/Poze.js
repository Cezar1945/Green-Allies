import React, { useState, useEffect } from 'react';
import './Poze.css';


function PhotoUploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [storedPhotos, setStoredPhotos] = useState([]);

  useEffect(() => {
    // Load stored photos from localStorage on component mount
    const storedPhotosJson = localStorage.getItem('photos');
    if (storedPhotosJson) {
      setStoredPhotos(JSON.parse(storedPhotosJson));
    }
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Add uploaded photo to stored photos
      const reader = new FileReader();
      reader.onload = () => {
        const newPhotos = [...storedPhotos, reader.result];
        setStoredPhotos(newPhotos);
        // Save updated photos to localStorage
        localStorage.setItem('photos', JSON.stringify(newPhotos));
      };
      reader.readAsDataURL(selectedFile);
      // Clear selected file
      setSelectedFile(null);
    }
  };

  return (
    <div>
      <h1>Upload Your Photo</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {storedPhotos.map((photo, index) => (
        <div key={index}>
          <h2>Photo {index + 1}:</h2>
          <img src={photo} alt={`Uploaded ${index + 1}`} width="200" />
        </div>
      ))}
    </div>
  );
}

export default PhotoUploadPage;
