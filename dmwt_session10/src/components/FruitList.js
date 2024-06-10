import React from 'react';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const FruitList = () => {
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

  return (
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
  );
};

export default FruitList;
