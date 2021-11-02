import React from 'react';
import { Restaurant, RestaurantInfo, Title, Address } from './styles';

const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Restaurante Teste</Title>
        <p>Avaliacao</p>
        <Address>Rua teste, 00</Address>
      </RestaurantInfo>
    </Restaurant>
  );
}

export default RestaurantCard;