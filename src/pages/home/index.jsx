import React, { useState } from 'react';
import Slider from "react-slick";
import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './styles';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/logo.svg'
import restaurant from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const { restaurants } = useSelector((state) => state.restaurants);
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue)
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label="Pesquisar"
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurant} title="nome restaurante" />
            <Card photo={restaurant} title="nome restaurante" />
            <Card photo={restaurant} title="nome restaurante" />
            <Card photo={restaurant} title="nome restaurante" />
            <Card photo={restaurant} title="nome restaurante" />
            <Card photo={restaurant} title="nome restaurante" />
            <Card photo={restaurant} title="nome restaurante" />
            <Card photo={restaurant} title="nome restaurante" />
            <Card photo={restaurant} title="nome restaurante" />
          </Carousel>
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </Container>
      <Map
        query={query}
      />
      {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} /> */}
    </Wrapper>
  );
};

export default Home;