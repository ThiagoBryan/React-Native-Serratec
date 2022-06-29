import { Text } from "react-native";
import {
  AntDesign,
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import {
  Container,
  Tela,
  Title,
  Header,
  LogOut,
  InputNome,
  InputTexto,
  InputPreco,
  InputEstoque,
  InputImagem,
  BotaoCadastrar,
  TextoBotaoCadastrar,
  Icones,
  Imagem,
  TextoSelecionarImagem,
} from "./styles.js";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { TouchableOpacity } from "react-native-web";

const CadastroProdutos = () => {
  const [olho, setOlho] = useState(false);

  return (
    <Container>
      <Tela>
        <LinearGradient
          colors={["#00ffff", "transparent"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "30%",
          }}
        />
        <Header>
          <LogOut>
            <AntDesign name="logout" size={12} color="#1f1d1d" />
          </LogOut>
          <Title>Cadastro de Produto</Title>
          <Imagem source={require("../../../assets/logo.png")} />
        </Header>
        <InputNome>
          <InputTexto placeholder="Nome" />
        </InputNome>
        <InputPreco>
          <InputTexto placeholder="Preço R$" />
        </InputPreco>
        <InputEstoque>
          <InputTexto placeholder="Quantidade em Estoque" />
        </InputEstoque>
        <InputImagem>
          <InputTexto placeholder="Imagem" />
          <TouchableOpacity onPress={() => setOlho(!olho)}>
            {olho ? (
              <Entypo name="eye" size={20} color="black" />
            ) : (
              <Entypo name="eye-with-line" size={20} color="gray" />
            )}
          </TouchableOpacity>
        </InputImagem>
        <TextoSelecionarImagem>
          Selecionar Imagem
          <AntDesign name="upload" size={10} color="#141568" />
        </TextoSelecionarImagem>
        <BotaoCadastrar>
          <TextoBotaoCadastrar>Cadastrar</TextoBotaoCadastrar>
        </BotaoCadastrar>
        <Icones>
          <Text />
          <AntDesign name="home" size={20} color="black" />
          <Text />
          <SimpleLineIcons name="bag" size={20} color="black" />
          <Text />
          <Feather name="star" size={20} color="black" />
          <Text />
          <MaterialCommunityIcons name="cart-outline" size={20} color="black" />
        </Icones>
        {/* <LinearGradient
          colors={["transparent", "#00ffff"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "30%",
          }}
        /> */}
      </Tela>
    </Container>
  );
};

export default CadastroProdutos;
