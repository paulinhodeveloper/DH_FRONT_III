import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Beer = () => {
  const [beer, setBeer] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getBeer = async () => {
      const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      const [data] = await res.json();
      setBeer(data);
    };

    getBeer();
  }, [id]);

  const { name, tagline, image_url, description, brewers_tips } = beer;

  return (
    <div>
      <h2>Cerveja número: {id}</h2>
      <div className="card">
        <img src={image_url} alt="beer-detail" />
        <p>{tagline}</p>
        <p>{description}</p>
        <p>{brewers_tips}</p>
      </div>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default Beer;
