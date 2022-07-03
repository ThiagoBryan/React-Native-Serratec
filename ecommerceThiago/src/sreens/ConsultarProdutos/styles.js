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

export const Foto = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: center;
  border: 1px solid;
`;

export const Informaçoes = styled.View`
width: 85%;
height: 200px;
border: 3px solid;
border-radius: 15px;
align-self: center;
background-color: ${colors.secondary};
`;

export const TextoInformacoes = styled.Text`
flex-direction: column;
margin: 10px;
`;

export const Icones = styled.View`
flex-direction: row;
justify-content: space-evenly;
align-items: center;
text-align: center;
`;
