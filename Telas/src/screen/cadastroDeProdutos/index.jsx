import { Text } from "react-native";
import { AntDesign, SimpleLineIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
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

const CadastroProdutos = () => {
  return (
    <Container>
      <Tela>
        <Header>
          <LogOut><AntDesign name="logout" size={12} color="#1f1d1d" /></LogOut>
        <Title>Cadastro de Produto</Title>
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
        <TextoSelecionarImagem>Selecionar Imagem <AntDesign name="upload" size={10} color="#141568" /></TextoSelecionarImagem>
        <BotaoCadastrar>
          <TextoBotaoCadastrar>Cadastrar</TextoBotaoCadastrar>
        </BotaoCadastrar>
        <Icones>
          <Text /><AntDesign name="home" size={20} color="#1f1d1d" />
          <Text /><SimpleLineIcons name="bag" size={20} color="#1f1d1d" />
          <Text /><Feather name="star" size={20} color="#1f1d1d" />
          <Text /><MaterialCommunityIcons name="cart-outline" size={20} color="#1f1d1d" />
        </Icones>
      </Tela>
    </Container>
  );
};



export default CadastroProdutos;
