import React from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';

const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Restaurante Teste</Title>
        <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
        <Address>Rua teste, 00</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurante} alt="Foto do restaurante" />
    </Restaurant>
  );
}
export default RestaurantCard;