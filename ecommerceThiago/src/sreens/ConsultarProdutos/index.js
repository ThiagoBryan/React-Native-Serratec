import React from "react";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Title,
  Imagem,
  Foto,
  Informaçoes,
  TextoInformacoes,
  Icones,
} from "./styles";
import Gradiente from "../../../components/Gradiente";

const ConsultarProdutos = () => {
  return (
    <Container>
      <Gradiente posicao="top" />
      <Header>
        <TouchableOpacity>
          <Ionicons name="arrow-back-circle-outline" size={20} color="black" />
        </TouchableOpacity>
        <Title>Consultar Produtos</Title>
        <Imagem source={require("../../../assets/Logo.jpg")} />
      </Header>
      <Foto source={require("../../../assets/Logo.jpg")}  />
      <Informaçoes>
        <TextoInformacoes>
          <Text>Id Produto:</Text>
        </TextoInformacoes>
        <TextoInformacoes>
          <Text>Nome:</Text>
        </TextoInformacoes>
        <TextoInformacoes>
          <Text>Descrição:</Text>
        </TextoInformacoes>
        <TextoInformacoes>
          <Text>Quantidade em Estoque:</Text>
        </TextoInformacoes>
        <TextoInformacoes>
          <Text>Preço:</Text>
        </TextoInformacoes>
      </Informaçoes>
      <Icones>
        <TouchableOpacity>
          <Ionicons name="add-circle-sharp" size={24} color="black" />
          <Text>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="edit" size={24} color="black" />
          <Text>Alterar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="delete" size={24} color="black" />
          <Text>Excluir</Text>
        </TouchableOpacity>
      </Icones>
      <Gradiente posicao="Bottom" />
    </Container>
  );
};

export default ConsultarProdutos;
