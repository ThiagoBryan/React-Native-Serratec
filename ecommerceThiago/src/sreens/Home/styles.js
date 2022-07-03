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

export const Titulo = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 50pt;
`;