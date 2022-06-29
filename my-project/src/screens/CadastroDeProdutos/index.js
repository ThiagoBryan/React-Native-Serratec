import {
  AntDesign,
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
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
// import { LinearGradient } from "expo-linear-gradient";
import GradienteTopo from './../../components/GradientTopo/index';
import GradienteRodape from './../../components/GradienteRodape/index';

const CadastroProdutos = () => {
  return (
    <Container>
     <GradienteTopo />
      <Header>
        <LogOut>
          <AntDesign name="logout" size={12} color="black" />
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
        <AntDesign name="home" size={20} color="black" />
        <SimpleLineIcons name="bag" size={20} color="black" />
        <Feather name="star" size={20} color="black" />
        <MaterialCommunityIcons name="cart-outline" size={20} color="black" />
      </Icones>
     <GradienteRodape />
    </Container>
  );
};

export default CadastroProdutos;
