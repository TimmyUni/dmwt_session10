import React from 'react';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const FruitList = () => {
  const { data: fruits, error } = useSWR('/api/list-fruits', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (!fruits) {
    return <p>Loading fruits...</p>;
  }

  return (
    <ul>
      {fruits.length > 0 ? (
        fruits.map((fruit, index) => (
          <li key={index}>
            {fruit['Deutscher Name']} ({fruit['Lateinischer Name']}), {fruit.Farbe}, {fruit.Herkunft}, {fruit.Kalorien} kcal
          </li>
        ))
      ) : (
        <li>No fruits available</li>
      )}
    </ul>
  );
};

export default FruitList;
