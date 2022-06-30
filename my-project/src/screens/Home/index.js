import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Container, Login, Title, BotaoLogin, Nome, Olho } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [olho, setOlho] = useState(false);

  const navigation = useNavigation();

  function openScreenCadastroDeProdutos() {
    navigation.navigate("CadastroProdutos");
  }

  function openScreenFavoritos() {
    navigation.navigate("Favoritos");
  }

  return (
    <Container>
      <Login>
        <Title>Login</Title>
        <View style={{ marginTop: 30 }}>
          <Nome placeholder="username" />
          <Olho>
            <TextInput placeholder="password" />
            <TouchableOpacity onPress={() => setOlho(!olho)}>
              {olho ? (
                <Entypo name="eye" size={20} color="black" />
              ) : (
                <Entypo name="eye-with-line" size={20} color="grey" />
              )}
            </TouchableOpacity>
          </Olho>
        </View>
        <BotaoLogin onPress={openScreenCadastroDeProdutos}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Entrar</Text>
        </BotaoLogin>
      </Login>
    </Container>
  );
};

export default Home;
