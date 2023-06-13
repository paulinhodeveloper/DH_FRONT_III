import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  const { name, tagline, image_url, id } = data;

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{tagline}</p>
      <img src={image_url} alt="beer-detail" />
      <Link to={`/beer/${id}`}>Detalhes</Link>
    </div>
  );
};

export default Card;
