import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Title,
  Imagem,
} from "./styles";

const ConsultarProdutos = () => {
  return (
    <Container>
      <Header>
        <TouchableOpacity>
        <Ionicons name="arrow-back-circle-outline" size={20} color="black" />
        </TouchableOpacity>
        <Title>Consultar Produtos</Title>
        <Imagem source={require("../../../assets/Logo.jpg")} />
      </Header>
      </Container>
  );
};

export default ConsultarProdutos;
