import React, { useEffect, useState } from "react";
import {
  Container,
  Tela,
  BotaoDown,
  BotaoUp,
  BotaoZerar,
  ContadorContainer,
  Title,
  Icones,
  Imagens,
} from "./styles.js";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

export const Contador = () => {
  const [numero, setNumero] = useState(0);
  const [imagem, setImagem] = useState(
    require(`../../../assets/chamander1.png`)
  );

  useEffect(() => {
    if (numero === 0) {
      setImagem(require(`../../../assets/imagem1.png`));
    } else if (numero === 1 || numero === -2) {
      setImagem(require(`../../../assets/magonegro.jpg`));
    } else if (numero === 3 || numero === -1) {
      setImagem(require(`../../../assets/evolucaochar.jpg`));
    } else if (numero === 5 || numero === -3) {
      setImagem(require(`../../../assets/digimonevo.jpg`));
    } else if (numero === 7 || numero === -5) {
      setImagem(require(`../../../assets/imagem1.png`));
    } else if (numero === 4 || numero === -4) {
      setImagem(require(`../../../assets/aguegabu.png`));
    } else if (numero === 2 || numero === -6) {
        setImagem(require(`../../../assets/olhosazuis.jpg`));
    } else {
      setImagem(require(`../../../assets/chamander1.png`));
    }
  }, [numero]);

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
      <Tela>
        <Title>CONTADOR</Title>
        <Imagens source={imagem} alt="logo" />
        <BotaoZerar onPress={Zerar}>
          <Icones>
            <MaterialCommunityIcons name="restart" size={24} color="black" />
          </Icones>
        </BotaoZerar>
        <BotaoUp onPress={Aumentar}>
          <Icones>
            <Entypo name="arrow-with-circle-up" size={20} color="black" />
          </Icones>
        </BotaoUp>
        <ContadorContainer>{numero}</ContadorContainer>
        <BotaoDown onPress={Diminuir}>
          <Icones>
            <Entypo name="arrow-with-circle-down" size={20} color="black" />
          </Icones>
        </BotaoDown>
      </Tela>
    </Container>
  );
};
