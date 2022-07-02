import styled from "styled-components/native";
import colors from "../Theme/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  /* color: ${colors.primary}; */
  background-color: yellow;
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
  color: ${colors.secondary};
  text-align: center;
  margin-left: 25px;
`;

export const Imagem = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;