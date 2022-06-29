import React from "react";
import { FlatList, Text } from "react-native";
import {
  Container,
  Header,
  LogOut,
  Title,
  Imagem,
  Icones,
  Cards,
  Card1,
} from "./styles.js";
import {
  AntDesign,
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import GradienteTopo from "./../../components/GradientTopo/index";
import GradienteRodape from "./../../components/GradienteRodape/index";

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
    <Text>{produto}</Text>
    <Text>{preco}</Text>
    <Text>{estoque}</Text>
  </Cards>
);

const Favoritos = () => {
  const itemRenderizado = ({ item }) => (
    <Item produto={item.produto} preco={item.preco} estoque={item.estoque} />
  );

  return (
    <Container>
      <GradienteTopo />
      <Header>
        <LogOut>
          <AntDesign name="logout" size={12} color="black" />
        </LogOut>
        <Title>Favoritos</Title>
        <Imagem source={require("../../../assets/SplashScreen.png")} />
      </Header>

      <FlatList
        data={Lista}
        renderItem={itemRenderizado}
        keyExtractor={(item) => item.id}
      />
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
export default Favoritos;
