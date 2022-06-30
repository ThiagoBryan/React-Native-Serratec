import React from "react";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  LogOut,
  Title,
  Imagem,
  ImagemCard,
  Icones,
  Cards,
  TextCards,
} from "./styles.js";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import GradienteTopo from "./../../components/GradientTopo/index";
import GradienteRodape from "./../../components/GradienteRodape/index";
import { useNavigation } from "@react-navigation/native";

const Lista = [
  {
    id: 1,
    produto: "produto 1",
    preco: "Preço R$ 50",
    estoque: "1 Unidades em estoque",
  },
  {
    id: 2,
    produto: "produto 5",
    preco: "Preço R$40",
    estoque: "20 Unidades em estoque",
  },
  {
    id: 3,
    produto: "produto 6",
    preco: "Preço R$ 70",
    estoque: "8 Unidades em estoque",
  },
];

const Item = ({ produto, preco, estoque }) => (
  <Cards>
    <TextCards>{produto}</TextCards>
    <TextCards>{preco}</TextCards>
    <TextCards>{estoque}</TextCards>
  </Cards>
);

const Favoritos = () => {
  const navigation = useNavigation();

  function openScreenCadastroDeProdutos() {
    navigation.navigate("CadastroProdutos");
  }

  function openScreenHome() {
    navigation.navigate("Home");
  }

  function openScreenFavoritos() {
    navigation.navigate("Favoritos");
  }

  const itemRenderizado = ({ item }) => (
    <Item produto={item.produto} preco={item.preco} estoque={item.estoque} />
  );

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
        <Title>Favoritos</Title>
        <Imagem source={require("../../../assets/SplashScreen.png")} />
      </Header>
      <ImagemCard source={require("../../../assets/2.png")} />
      <ImagemCard source={require("../../../assets/5.jpg")} />
      <ImagemCard source={require("../../../assets/6.jpg")} />
      <FlatList
        data={Lista}
        renderItem={itemRenderizado}
        keyExtractor={(item) => item.id}
      />
      <Icones>
        <AntDesign
          name="home"
          size={20}
          color="black"
          onPress={openScreenHome}
        />
         <Feather name="shopping-bag" size={20} color="black" onPress={openScreenCadastroDeProdutos} />
        <Feather name="star" size={20} color="black"  onPress={openScreenFavoritos} />
        <MaterialCommunityIcons name="cart-outline" size={20} color="black" />
      </Icones>
      <GradienteRodape />
    </Container>
  );
};
export default Favoritos;
