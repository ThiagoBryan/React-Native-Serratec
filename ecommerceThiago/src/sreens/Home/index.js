import React from "react";
import { View ,Text } from "react-native";
import { Imagem,Titulo, Container } from './styles';


const Home = () => {
  return (
    <Container>
      <Imagem source={require("../../../assets/pacman-gif.gif")} />
      <Titulo>32 BITS</Titulo>
    </Container>
  );
};

export default Home;
