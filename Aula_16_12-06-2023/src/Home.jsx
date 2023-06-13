import React, { useEffect, useState } from 'react';
import Card from './components/Card';

const Home = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      const res = await fetch('https://api.punkapi.com/v2/beers');
      const data = await res.json();
      setBeers(data);
    };

    getBeers();
  }, []);

  return (
    <div className="grid">
      {beers.length > 0 && beers.map((beer) => <Card data={beer} key={beer.id} />)}
    </div>
  );
};

export default Home;
