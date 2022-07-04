import styled from "styled-components/native";
import colors from "../Theme/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  background-color: ${colors.primary};
`;

export const Imagem = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 50px;
  align-self: center;
`;

export const Title = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 50pt;
`;

export const Botoes = styled.View`
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 30px;
`;

export const StyleBotoes = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  margin: 10px;
  border: 2px solid;
  border-radius: 10px;
  background-color: ${colors.secondary};
`;

export const TextBotoes = styled.Text`
  font-weight: bold;
  font-size: 20pt;
`;
