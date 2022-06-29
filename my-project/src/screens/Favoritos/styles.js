import styled from "styled-components/native";
import colors from "../Theme/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  justify-content: flex-start;
`;

export const Header = styled.View`
  height: 100;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const LogOut = styled.TouchableOpacity`
  padding-right: 35px;
`;

export const Title = styled.Text`
  font-size: 15;
  font-weight: bold;
  color: ${colors.secondary};
  text-align: center;
`;

export const Imagem = styled.Image`
  width: 30;
  height: 30;
  border-radius: 50px;
  margin-left: 50px;
`;

export const Icones = styled.Pressable`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 190;
  height: 35;
  background-color: #00ffff;
`;
