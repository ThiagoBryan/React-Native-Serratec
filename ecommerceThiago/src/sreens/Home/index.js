import React from "react";
import { View ,Text } from "react-native";
import TabBar from "../../../components/TabBar";
import { Imagem,Titulo, Container } from './styles';


const Home = () => {
  return (
    <Container>
      <Imagem source={require("../../../assets/pacman-gif.gif")} />
      <Titulo>32 BITS</Titulo>
      {/* <TabBar /> */}
    </Container>
  );
};

export default Home;
