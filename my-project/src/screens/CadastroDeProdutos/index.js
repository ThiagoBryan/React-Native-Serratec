import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  Title,
  Header,
  Body,
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
import GradienteTopo from "./../../components/GradientTopo/index";
import GradienteRodape from "./../../components/GradienteRodape/index";
import { useNavigation } from "@react-navigation/native";

const CadastroProdutos = () => {
  const navigation = useNavigation();

  function openScreenFavoritos() {
    navigation.navigate("Favoritos");
  }

  function openScreenHome() {
    navigation.navigate("Home");
  }

  function openScreenCadastroDeProdutos() {
    navigation.navigate("CadastroProdutos");
  }

  return (
    <Container>
      <GradienteTopo />
      <Header>
        <LogOut>
          <AntDesign
            name="logout"
            size={12}
            color="black"
            onPress={openScreenHome}
          />
        </LogOut>
        <Title>Cadastro de Produto</Title>
        <Imagem source={require("../../../assets/SplashScreen.png")} />
      </Header>
      <Body>
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
        </InputImagem>
      </Body>
      <TextoSelecionarImagem>
        Selecionar Imagem
        <AntDesign name="upload" size={10} color="#141568" />
      </TextoSelecionarImagem>
      <BotaoCadastrar>
        <TextoBotaoCadastrar>Cadastrar</TextoBotaoCadastrar>
      </BotaoCadastrar>
      <Icones>
        <AntDesign
          name="home"
          size={20}
          color="black"
          onPress={openScreenHome}
        />
        <Feather
          name="shopping-bag"
          size={20}
          color="black"
          onPress={openScreenCadastroDeProdutos}
        />
        <Feather
          name="star"
          size={20}
          color="black"
          onPress={openScreenFavoritos}
        />
        <MaterialCommunityIcons name="cart-outline" size={20} color="black" />
      </Icones>
      <GradienteRodape />
    </Container>
  );
};

export default CadastroProdutos;
