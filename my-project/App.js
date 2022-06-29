import React from "react";
import { Contador } from "./src/screens/Contador/index.js";
import { Home } from "./src/screens/Home/index";
import { Quadrados } from "./src/screens/Quadrados";
import Favorito from './src/screens/Favorito/index';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CadastroProdutos from './src/screens/CadastroDeProdutos/index';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <>
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="CadastrodeProdutos" component={CadastroProdutos} /> 
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Quadrados" component={Quadrados} /> 
         <Stack.Screen name="Contador" component={Contador} />
         <Stack.Screen name="Favoritos" component={Favorito} />  
       </Stack.Navigator>
     </NavigationContainer>
    </>
  );
};

export default App;
