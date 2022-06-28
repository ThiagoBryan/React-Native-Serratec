import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #c3c3c3;
`;

export const Title = styled.Text`
  background-color: #00ced1;
  width: 50%;
  align-self: center;
  text-align: center;
  margin-top: 10;
  border: 3px;
  border-color: #4682b4;
  border-radius: 10px;
  font-weight: bold;
  font-size: 19px;
  /* font-family: 'Courier New', Courier, monospace; */
`;

export const Imagens = styled.Image`
  width: 150;
  height: 100;
  border-radius: 25px;
  align-self: center;
  margin-top: 5;
`;


export const BotaoZerar = styled.TouchableOpacity`
  background-color: #00ced1;
  padding: 10px;
  margin-top: 1;
  border: 3px;
  border-color: #4682b4;
  border-radius: 10px;
  width: 50%;
  align-self: center;
  text-align: center;
  margin-top: 8;
  
  /* &&:hover {
    background-color: red;
  } */
  `;

export const BotaoUp = styled.TouchableOpacity`
  background-color: #00ced1;
  padding: 10px;
  margin-top: 10;
  border: 3px;
  border-color: #4682b4;
  border-radius: 10px;
  margin-bottom: 7;
  width: 50%;
  align-self: center;
  text-align: center;
  `;

export const Tela = styled.View`
  width: 250;
  height: 400;
  background-color: #3cb371;
  border: 10px;
  border-radius: 50px;
`;
export const BotaoDown = styled.TouchableOpacity`
  background-color: #00ced1;
  padding: 10px;
  margin-top: 5;
  border: 3px;
  border-color: #4682b4;
  border-radius: 10px;
  width: 50%;
  align-self: center;
  text-align: center;
`;

export const Icones = styled.Text`
  font-weight: bold;
  font-style: italic;
`;

export const ContadorContainer = styled.Text`
  width: 50%;
  align-self: center;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  
`;

