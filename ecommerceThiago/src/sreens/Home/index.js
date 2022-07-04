import React from "react";
import {
  Container,
  Imagem,
  Botoes,
  StyleBotoes,
  TextBotoes,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";


const Home = () => {

  const navigation = useNavigation();

  function openScreenUsuario() {
    navigation.navigate("Usuario");
  }

  function openScreenCategoria() {
    navigation.navigate("Categoria");
  }
  function openScreenProdutos() {
    navigation.navigate("Produtos");
  }
 


  return (
    <Container>
      <Imagem source={require("../../../assets/pacman-gif.gif")} />
      <Title>32 BITS</Title>
      <Botoes>
        <StyleBotoes onPress={openScreenUsuario}>
          <TextBotoes>Usuario</TextBotoes>
        </StyleBotoes>
        <StyleBotoes onPress={openScreenCategoria}>
          <TextBotoes>Categoria</TextBotoes>
        </StyleBotoes>
        <StyleBotoes onPress={openScreenProdutos}>
          <TextBotoes>Produto</TextBotoes>
        </StyleBotoes>
      </Botoes>
    </Container>
  );
};

export default Home;
