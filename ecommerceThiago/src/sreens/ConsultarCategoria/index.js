import React, { useState, useEffect } from 'react';
import { Ball, Box, BoxAll, Container, Icones, IconesModificacao, Imagem, ImagemCateg, BallIcone, TextBox, Title, TitleIcon, Top } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TabBar from './../../../components/TabBar/index';
import { TouchableOpacity } from 'react-native';
import axios from "axios";
import Categoria from './../Categoria/index';

const ConsultarCategoria = () => {

  const navigation = useNavigation();

  const TelaAnterior = () => {
    navigation.navigate('Categoria') 
  }

  const [categorias, setCategorias] = useState([]);
  // https://reactnative.herokuapp.com/reactnative/categoria
  const getCategorias = () => {
    axios.get('https://secret-headland-69654.herokuapp.com/materias').then((response) => {
      setCategorias(response.data);
      console.log(response.data)
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
          <MaterialIcons 
            name="category" 
            size={34} 
            color="black" 
          />
        </BallIcone>
      </Top>

      <ImagemCateg>
        <Imagem source={require("../../../assets/Logo.jpg")} />
      </ImagemCateg>

      <BoxAll>
          <TextBox>
          {/* {categorias.map((categoria) => (
        {categorias.titulo}
          ))} */}
          </TextBox>

               
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
            <MaterialIcons 
              name="edit" 
              size={24} 
              color="black"
            />
          </Ball>
          <TitleIcon>Editar</TitleIcon>
        </IconesModificacao>
        <IconesModificacao>
          <Ball>
          
            <Foundation 
              name="trash" 
              size={24} 
              color="black"
            />
          
          </Ball>
          <TitleIcon>Excluir</TitleIcon>
        </IconesModificacao>
      </Icones>

      <TabBar />
    </Container>

  );
}

export default ConsultarCategoria;