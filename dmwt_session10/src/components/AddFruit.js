import React, { useState } from 'react';

const AddFruit = () => {
  const [germanName, setGermanName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [color, setColor] = useState('');
  const [origin, setOrigin] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFruit = {
      germanName,
      latinName,
      color,
      origin,
      calories,
    };

    const response = await fetch('/api/add-fruit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFruit),
    });

    if (!response.ok) {
      console.error('Failed to add fruit');
      return;
    }

    const data = await response.json();
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="germanName">German Name</label>
        <input
          id="germanName"
          type="text"
          value={germanName}
          onChange={(e) => setGermanName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="latinName">Latin Name</label>
        <input
          id="latinName"
          type="text"
          value={latinName}
          onChange={(e) => setLatinName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="color">Color</label>
        <input
          id="color"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="origin">Origin</label>
        <input
          id="origin"
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories</label>
        <input
          id="calories"
          type="text"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddFruit;
