import React, { useState } from 'react';
import { Container, Search, Logo, Wrapper, Map, CarouselTitle } from './styles';
import logo from '../../assets/logo.svg'
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

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
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;