import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  Title,
  Header,
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
  IconeTexto,
} from "./styles.js";
import GradienteTopo from "./../../components/GradientTopo/index";
import GradienteRodape from "./../../components/GradienteRodape/index";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

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
        <TouchableOpacity>
          <AntDesign
            name="logout"
            size={20}
            color="black"
            onPress={openScreenHome}
          />
        </TouchableOpacity>
        <Title>Cadastro de Produto </Title>
        <Imagem source={require("../../../assets/SplashScreen.png")} />
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
      </InputImagem>
      <TextoSelecionarImagem>
        Selecionar Imagem
        <IconeTexto>
        <AntDesign name="upload" size={13} color="#141568" />
        </IconeTexto> 
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
