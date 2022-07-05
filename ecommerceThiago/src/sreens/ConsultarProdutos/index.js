import React, { useState, useEffect } from 'react';
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
import { useNavigation } from "@react-navigation/native";
import TabBar from "../../../components/TabBar";
import axios from "axios";

const ConsultarProdutos = () => {

  const navigation = useNavigation();

  function openScreenHome() {
    navigation.navigate("Home");
  }
  const [Produtos, setProdutos] = useState([]);
  // https://reactnative.herokuapp.com/reactnative/categoria
  const getProdutos = () => {
    axios.get('https://secret-headland-69654.herokuapp.com/materias').then((response) => {
      setProdutos(response.data);
      console.log(response.data)
    });
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <Container>
      <Header>
        <TouchableOpacity>
          <Ionicons name="arrow-back-circle-outline" size={30} color="black" onPress={openScreenHome} />
        </TouchableOpacity>
        <Title>Consultar Produtos</Title>
        <Imagem source={require("../../../assets/Logo.jpg")} />
      </Header>
      <Foto  />
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
      <TabBar />
    </Container>
  );
};

export default ConsultarProdutos;
