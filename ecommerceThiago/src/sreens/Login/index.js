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
import TabBar from "../../../components/TabBar";

const Login = () => {

  const navigation = useNavigation();

  function openScreenTabBar() {
    navigation.navigate("TabBar");
  }

  
//   function openScreenHome() {
//     navigation.navigate("Home");
//   }

  return (
    <Container>
      {/* <Header>
        <TouchableOpacity>
          <Ionicons name="arrow-back-circle-outline" size={30} color="black" onPress={openScreenHome} />
        </TouchableOpacity>
        <Title>Produtos</Title>
        <Imagem source={require("../../../assets/Logo.jpg")} />
      </Header>
      <ImagemLogo source={require("../../../assets/Logo.jpg")} /> */}
      <Botoes>
        <StyleBotoes onPress={openScreenTabBar}>
          <TextBotoes>Entrar</TextBotoes>
        </StyleBotoes>
        
      </Botoes>
 
    </Container>
  );
};

export default Login;
