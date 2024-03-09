import React, { useState, useEffect } from 'react';
import './Game.css'; // Import CSS file

const RecycleGame = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [level, setLevel] = useState(1);
  const [items, setItems] = useState([
    { id: 1, name: 'Plastic Bottle', type: 'recyclable' },
    { id: 2, name: 'Newspaper', type: 'recyclable' },
    { id: 3, name: 'Aluminum Can', type: 'recyclable' },
    { id: 4, name: 'Banana Peel', type: 'non-recyclable' },
    { id: 5, name: 'Glass Jar', type: 'recyclable' },
    { id: 6, name: 'Plastic Bag', type: 'non-recyclable' },
    { id: 7, name: 'Cardboard Box', type: 'recyclable' },
    { id: 8, name: 'Battery', type: 'non-recyclable' },
    { id: 9, name: 'Tin Can', type: 'recyclable' },
    { id: 10, name: 'Egg Carton', type: 'recyclable' },
  ]);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        const updatedItems = items.map(item => ({
          ...item,
          x: Math.random() * (window.innerWidth - 200),
          y: Math.random() * (window.innerHeight - 200)
        }));
        setItems(updatedItems);
      }, 1000); // Update items position every 1 second
      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  const handleStartGame = () => {
    setTimeLeft(60);
    setGameStarted(true);
  };

  const handleItemClick = (itemType) => {
    if (itemType === 'recyclable') {
      setScore(score + 1);
    } else {
      setScore(Math.max(0, score - 1));
    }
    // Shuffle items
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffledItems);
  };

  const handleNextLevel = () => {
    setLevel(level + 1);
    setTimeLeft(60 + level * 10); // Increase time for each level
  };

  return (
    <div className="recycle-game-container">
      <h1>Recycle Game</h1>
      {!gameStarted ? (
        <button className="start-button" onClick={handleStartGame}>Start Game</button>
      ) : (
        <>
          <p>Level: {level}</p>
          <p>Score: {score}</p>
          <p>Time Left: {timeLeft} seconds</p>
          <div className="items-container">
            {items.map((item) => (
              <button
                key={item.id}
                className={`item-button ${item.type}`}
                style={{ top: `${item.y}px`, left: `${item.x}px` }}
                onClick={() => handleItemClick(item.type)}>
                {item.name}
              </button>
            ))}
          </div>
          <button className="next-level-button" onClick={handleNextLevel}>Next Level</button>
        </>
      )}
    </div>
  );
};

export default RecycleGame;
