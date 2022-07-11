import React, { useState, useEffect } from "react";
import {
  Ball,
  BoxAll,
  Container,
  Icones,
  IconesModificacao,
  ImagemAPi,
  BallIcone,
  TextBox,
  Title,
  TitleIcon,
  Top,
  PosicaoTexto,
  ItensApi,
} from "./styles";
import { Ionicons, MaterialIcons, Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import TabBar from "./../../../components/TabBar/index";
import axios from "axios";
import { Text } from "react-native";
import { fontSize, textAlign } from "@mui/system";

const ConsultarCategoria = () => {
  const navigation = useNavigation();

  const TelaAnterior = () => {
    navigation.navigate("Categoria");
  };

  const [categorias, setCategorias] = useState([]);

  // const getCategorias = () => {
  //   axios
  //     .get("https://secret-headland-69654.herokuapp.com/materias")
  //     .then((response) => {
  //       setCategorias(response.data);
  //       console.log(response.data);
  //     });
  // };
  const getCategorias = () => {
    axios
      .get("https://reactnative.herokuapp.com/reactnative/categoria", {
        auth: {
          username: "reactnative",
          password: "2022",
        },
      })
      .then((response) => {
        setCategorias(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <Container>
      <Top>
        <Ball>
          <Ionicons
            name="md-caret-back-circle-sharp"
            size={34}
            color="black"
            onPress={TelaAnterior}
          />
        </Ball>
        <Title>Consultar Categoria</Title>
        <BallIcone>
          <MaterialIcons name="category" size={34} color="black" />
        </BallIcone>
      </Top>

      {/* <ImagemCateg>
        <Imagem source={require("../../../assets/Logo.jpg")} />
      </ImagemCateg> */}

      <BoxAll>
        {categorias.map((categoria) => (
          <ItensApi>
            <ImagemAPi source={categoria.foto} />
            <PosicaoTexto>
              <TextBox>
                <Text>ID: </Text>
                {categoria.id}
              </TextBox>
              <Text style={{fontSize:"15pt"}}>Nome Categoria:</Text>
              <TextBox>{categoria.nome}</TextBox>
            </PosicaoTexto>
          </ItensApi>
        ))}
      </BoxAll>

      <Icones>
        <IconesModificacao>
          <Ball>
            <MaterialIcons name="library-add" size={24} color="black" />
          </Ball>
          <TitleIcon>Adicionar</TitleIcon>
        </IconesModificacao>
        <IconesModificacao>
          <Ball>
            <MaterialIcons name="edit" size={24} color="black" />
          </Ball>
          <TitleIcon>Editar</TitleIcon>
        </IconesModificacao>
        <IconesModificacao>
          <Ball>
            <Foundation name="trash" size={24} color="black" />
          </Ball>
          <TitleIcon>Excluir</TitleIcon>
        </IconesModificacao>
      </Icones>
      <TabBar />
    </Container>
  );
};

export default ConsultarCategoria;
