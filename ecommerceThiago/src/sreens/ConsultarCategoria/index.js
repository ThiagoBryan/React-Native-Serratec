import React from 'react';
import { Ball, Box, BoxAll, Container, Icones, IconesModificacao, Imagem, ImagemCateg, BallIcone, TextBox, Title, TitleIcon, Top } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TabBar from './../../../components/TabBar/index';

const ConsultarCategoria = () => {

  const navigation = useNavigation();

  const TelaAnterior = () => {
    navigation.navigate('Categoria') 
  }

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
        <Box>
          <TextBox>API</TextBox>
        </Box>        
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