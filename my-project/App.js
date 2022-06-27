import React, { useState } from "react";
import {
  Image,
} from "react-native";
import {
  Container,
  Contador,
  BotaoDown,
  BotaoUp,
  BotaoZerar,
  ContadorContainer,
  Title,
  TextoBotoes,
  Imagem1,
} from "./styles";

const App = () => {
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
      <Contador>
        <Title>CONTADOR</Title>
        <Imagem1
          source={require("./assets/imagem1.png")}
        />
        <BotaoZerar onPress={Zerar}>
          <TextoBotoes>RESTART</TextoBotoes>
        </BotaoZerar>
        <BotaoUp onPress={Aumentar}>
          <TextoBotoes>UP</TextoBotoes>
        </BotaoUp>
        <ContadorContainer>{numero}</ContadorContainer>
        <BotaoDown onPress={Diminuir}>
          <TextoBotoes>DOWN</TextoBotoes>
        </BotaoDown>
      </Contador>
    </Container>
  );
};

export default App;
