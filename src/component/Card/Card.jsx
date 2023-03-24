import * as Styled from './styles';
import React from 'react';

export const Card = ({ name, year, image, onClick }) => {
  return (
    <Styled.Container>
      <div onClick={onClick} className="card-container">
        <img src={image} alt={name} className="card cover" />
        <div className="card-title">
          <h4 className="card-name">{name}</h4>
          <p className="card-year">{year}</p>
        </div>
      </div>
    </Styled.Container>
  );
};

