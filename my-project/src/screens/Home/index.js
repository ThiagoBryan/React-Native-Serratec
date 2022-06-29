import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Container, Login, Title, Senha, BotaoLogin, Nome, Olho } from "./styles";
import { Entypo } from '@expo/vector-icons';

export const Home = () => {

const [olho, setOlho] = useState(false);

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
        <BotaoLogin>
          <Text style={{ color: "white", fontWeight: "bold" }}>Entrar</Text>
        </BotaoLogin>
      </Login>
    </Container>
  );
};


