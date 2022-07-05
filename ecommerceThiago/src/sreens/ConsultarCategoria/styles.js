import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: "rgba(254,188,56,0.75)";
  justify-content: space-between;  
`;

export const Top = styled.View`
  /* border: 2px solid black; */
  height:10%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

`;

export const BoxAll = styled.View`
  /* border: 2px solid black; */
  height: 40%;
  justify-content: space-around;
  align-items: center;
`;

export const Box = styled.View`
  width: 200px;
  height: 100px;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
`;
export const TextBox = styled.Text`
  font-family: 'calibri';
  font-size: 16pt;
  font-weight: bold;
  justify-content: center;
 
`;

export const Title = styled.Text`
 font-size: 20pt;
 font-weight: bold;
 text-align: center;
 width: 150px;
`;

export const ImagemCateg = styled.View`
 align-items: center;
 /* border: 1px solid; */
`;

export const Imagem = styled.Image`
 height: 120px;
 width:120px;
 border-radius: 50%;
`;


export const Ball = styled.TouchableOpacity`
 width: 45px;
 height: 45px;
 border-radius: 50%;
 background-color: #fff;
 justify-content: center;
 align-items: center;
 border: 2px solid;
`;
export const BallIcone = styled.View`
 width: 45px;
 height: 45px;
 border-radius: 50%;
 background-color: #fff;
 justify-content: center;
 align-items: center;
 border: 2px solid;
`;

export const Icones = styled.View`
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
 
`;

export const TextIcon = styled.View`
 flex-direction: row;
 justify-content: space-evenly;
 font-weight: bold;
 margin-top: 15px;
`;
export const TitleIcon = styled.Text`
 font-weight: bold;
 
 height: 10%;
 margin-top: 0px;
`;

export const IconesModificacao = styled.View`
  align-items: center;
  justify-content: center;
`;




