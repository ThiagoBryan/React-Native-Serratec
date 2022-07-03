import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Title,
  Imagem,
  ImagemLogo,
  Botoes,
  StyleBotoes,
  TextBotoes,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const Produtos = () => {

  const navigation = useNavigation();

  function openScreenConsultaDeProdutos() {
    navigation.navigate("ConsultarProdutos");
  }

  function openScreenAlterarProdutos() {
    navigation.navigate("AlterarProduto");
  }
  function openScreenCadastrarProduto() {
    navigation.navigate("CadastrarProduto");
  }
  function openScreenExcluirDeProdutos() {
    navigation.navigate("ExcluirProduto");
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity>
          <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
        </TouchableOpacity>
        <Title>Produtos</Title>
        <Imagem source={require("../../../assets/Logo.jpg")} />
      </Header>
      <ImagemLogo source={require("../../../assets/Logo.jpg")} />
      <Botoes>
        <StyleBotoes onPress={openScreenConsultaDeProdutos}>
          <TextBotoes>Consultar Produto</TextBotoes>
        </StyleBotoes>
        <StyleBotoes onPress={openScreenAlterarProdutos}>
          <TextBotoes>Alterar Produto</TextBotoes>
        </StyleBotoes>
        <StyleBotoes onPress={openScreenCadastrarProduto}>
          <TextBotoes>Cadastrar Produto</TextBotoes>
        </StyleBotoes>
        <StyleBotoes onPress={openScreenExcluirDeProdutos}>
          <TextBotoes>Excluir Produto</TextBotoes>
        </StyleBotoes>
      </Botoes>
    </Container>
  );
};

export default Produtos;
