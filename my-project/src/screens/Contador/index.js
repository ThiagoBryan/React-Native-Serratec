import React, { useState } from "react";
import {
  Container,
  Contador1,
  BotaoDown,
  BotaoUp,
  BotaoZerar,
  ContadorContainer,
  Title,
  Icones,
  Imagem1,
} from "./styles.js";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Contador = () => {
  const [numero, setNumero] = useState(0);
  const Aumentar = () => {
    setNumero(numero + 1);
  };
  const Diminuir = () => {
    setNumero(numero - 1);
  };
  const Zerar = () => {
    setNumero(0);
  };

  return (
    <Container>
      <Contador1>
        <Title>CONTADOR</Title>
        <Imagem1
          source={require("../../../assets/imagem1.png")}
        />
        <BotaoZerar onPress={Zerar}>
          <Icones><MaterialCommunityIcons name="restart" size={24} color="black" /></Icones>
        </BotaoZerar>
        <BotaoUp onPress={Aumentar}>
          <Icones><Entypo name="arrow-with-circle-up" size={20} color="black" /></Icones>
        </BotaoUp>
        <ContadorContainer>{numero}</ContadorContainer>
        <BotaoDown onPress={Diminuir}>
          <Icones><Entypo name="arrow-with-circle-down" size={20} color="black"/></Icones>
        </BotaoDown>
      </Contador1>
    </Container>
  );
};



