import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Container,
  Title,
  InputNome,
  InputTexto,
  InputPreco,
  InputEstoque,
  InputImagem,
  BotaoCadastrar,
  Icones,
} from "./styles.js";

const CadastroProdutos = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Container>
        <Image
          style={{ width: 50, height: 50, borderRadius: 50, display: "flex" }}
          source={require("../../../assets/SplashScreen.png")}
        />
        <Title>Cadastro de Produto</Title>
        <View style={{ marginTop: 30 }}>
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
        </View>
        <BotaoCadastrar>
          <Text style={{ color: "blue", fontWeight: "bold" }}>Cadastrar</Text>
        </BotaoCadastrar>
        <Icones>
          <Icon style={styles.home} name="home" size={25} color="black" />
          <Icon
            style={styles.produtos}
            name="shopping-bag"
            size={25}
            color="black"
          />
          <Icon style={styles.favoritos} name="staro" size={25} color="black" />
          <Icon
            style={styles.carrinho}
            name="shoppingcart"
            size={25}
            color="black"
          />
        </Icones>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {},
  favoritos: {},
  produtos: {},
  carrinho: {},
});

export default CadastroProdutos;
