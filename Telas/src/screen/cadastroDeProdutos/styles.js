import styled from "styled-components/native";
import colors from "../../theme/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Tela = styled.View`
  width: 250;
  height: 420;
  /* background-color: ${colors.primary}; */
  background-color:	#4169E1;
  border-radius: 10;
`;

export const Header = styled.View`
  width: 50;
  height: 50;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10;
  margin-bottom: 30;
  margin-left: 110px;
`;

export const LogOut = styled.Text`
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
  width: 90%;
  background-color: ${colors.tertiary};
  border-radius: 10px;
  border: 1px solid;
  border-color: ${colors.primary};
  height: 35;
  align-self: center;
  box-shadow: 0px 5px 5px #2F4F4F;
`;

export const InputPreco = styled.View`
  width: 100%;
  flex-direction: row;
  width: 90%;
  background-color: ${colors.tertiary};
  border-radius: 10px;
  border: 1px solid;
  border-color: ${colors.primary};
  height: 35;
  align-self: center;
  margin-top: 15;
  box-shadow: 0px 5px 5px #2F4F4F;
`;

export const InputEstoque = styled.View`
  width: 100%;
  flex-direction: row;
  width: 90%;
  background-color: ${colors.tertiary};
  border-radius: 10px;
  border: 1px solid;
  border-color: ${colors.primary};
  height: 35;
  align-self: center;
  margin-top: 15;
  box-shadow: 0px 5px 5px #2F4F4F;
`;

export const InputImagem = styled.View`
  width: 100%;
  flex-direction: row;
  width: 90%;
  background-color: ${colors.tertiary};
  border-radius: 10px;
  height: 35;
  align-self: center;
  margin-top: 15;
  margin-bottom: 5;
  box-shadow: 0px 5px 5px #2F4F4F;
`;

export const TextoSelecionarImagem = styled.Text`
font-size: 10;
text-align: center;
color: ${colors.secondary};
margin-bottom: 15;
`;

export const BotaoCadastrar = styled.TouchableOpacity`
  width: 120;
  height: 30;
  background-color: ${colors.tertiary};
  align-self: center;
  margin: 10px;
  margin-bottom: 38px;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 5px #2F4F4F;
`;

export const TextoBotaoCadastrar = styled.Text`
  color: blue;
  font-weight: bold;
`;

export const Icones = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 8;
  padding-right: 12px;
`;
