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

export const Body = styled.View`
  margin-top: 50;
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

export const InputTexto = styled.TextInput`
  width: 100%;
  height: 35;
  color: ${colors.secondary};
  padding: 8px;
  font-size: 15;
  padding: 10px;
`;

export const InputNome = styled.View`
  flex-direction: row;
  width: 60%;
  background-color: ${colors.tertiary};
  border-radius: 10px;
  border: 1px solid;
  border-color: ${colors.primary};
  height: 35;
  align-self: center;
  box-shadow: 0px 5px 5px #2f4f4f;
  margin-top: 20;
`;

export const InputPreco = styled.View`
  width: 100%;
  flex-direction: row;
  width: 60%;
  background-color: ${colors.tertiary};
  border-radius: 10px;
  border: 1px solid;
  border-color: ${colors.primary};
  height: 35;
  align-self: center;
  margin-top: 15;
  box-shadow: 0px 5px 5px #2f4f4f;
`;

export const InputEstoque = styled.View`
  width: 100%;
  flex-direction: row;
  width: 60%;
  background-color: ${colors.tertiary};
  border-radius: 10px;
  border: 1px solid;
  border-color: ${colors.primary};
  height: 35;
  align-self: center;
  margin-top: 15;
  box-shadow: 0px 5px 5px #2f4f4f;
`;

export const InputImagem = styled.View`
  width: 100%;
  flex-direction: row;
  width: 60%;
  background-color: ${colors.tertiary};
  border-radius: 10px;
  border: 1px solid;
  border-color: ${colors.primary};
  height: 35;
  align-self: center;
  margin-top: 15;
  box-shadow: 0px 5px 5px #2f4f4f;
`;

export const TextoSelecionarImagem = styled.Text`
  font-size: 10;
  align-self: center;
  color: ${colors.secondary};
  margin-bottom: 10;
  margin-top: 8;
`;

export const BotaoCadastrar = styled.TouchableOpacity`
  width: 120;
  height: 30;
  background-color: ${colors.tertiary};
  align-self: center;
  margin-top: 25;
  border-radius: 10px;
  border: 1px solid;
  justify-content: center;
  align-items: center;
  border-color: ${colors.primary};
  box-shadow: 0px 5px 5px #2f4f4f;
`;

export const TextoBotaoCadastrar = styled.Text`
  color: #05148c;
  font-weight: bold;
`;

export const Icones = styled.Pressable`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 190;
  height: 35;
  background-color: #00ffff;
`;
