import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.View`
  width: 250;
  height: 330;
  background-color: #7b68ee;
  border-radius: 10;
`;

export const Title = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 30;
  font-weight: bold;
  padding: 20px;
`;

export const Nome = styled.TextInput`
  width: 230;
  height: 50;
  background-color: white;
  align-self: center;
  border-radius: 10;
  font-size: 18;
  padding-left: 25px;
`;

export const Senha = styled.TextInput`
  width: 230;
  height: 50;
  background-color: white;
  align-self: center;
  border-radius: 10;
  margin-top: 10;
  font-size: 18;
  padding-left: 25px;
`;

export const BotaoLogin = styled.Pressable`
  width: 120;
  height: 50;
  background-color: black;
  align-self: center;
  margin-top: 30;
  border-radius: 10;
  justify-content: center;
  align-items: center;
`;

// export const TextoEntrar = styled.Text`
//     color: "white"; 
//     font-weight: "bold";
// `;
