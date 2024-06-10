import React, { useState } from 'react';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const Post = () => {
  const [germanName, setGermanName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [color, setColor] = useState('');
  const [origin, setOrigin] = useState('');
  const [calories, setCalories] = useState('');

  const { data: fruits, isLoading, error } = useSWR('/api/list-fruits', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading fruits...</p>;
  }

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
    <div>
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
      <ul>
        {fruits && fruits.length > 0 ? (
          fruits.map((fruit, index) => (
            <li key={index}>
              {fruit.germanName} ({fruit.latinName}), {fruit.color}, {fruit.origin}, {fruit.calories} kcal
            </li>
          ))
        ) : (
          <li>No fruits available</li>
        )}
      </ul>
    </div>
  );
};

export default Post;
