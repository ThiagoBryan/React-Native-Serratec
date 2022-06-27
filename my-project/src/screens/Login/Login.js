import React from "react";
import { View, Text } from "react-native";
import { Container, Login, Title, Senha, BotaoLogin, Nome } from "../../../src/screens/Login/styles";

const Teste = () => {
  return (
    <Container>
      <Login>
        <Title>Login</Title>
        <View style={{ marginTop: 30 }}>
          <Nome placeholder="username"  />
          <Senha placeholder="password" />
        </View>
        <BotaoLogin>
          <Text style={{ color: "white", fontWeight: "bold" }}>Entrar</Text>
        </BotaoLogin>
      </Login>
    </Container>
  );
};

export default Teste;
