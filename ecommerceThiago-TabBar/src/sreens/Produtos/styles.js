import styled from "styled-components/native";
import colors from "../Theme/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.primary};
`;

export const Header = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: ${colors.tertiary};
  text-align: center;
  margin-left: 25px;
`;

export const Imagem = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const ImagemLogo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: center;
  border: 1px solid;
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
