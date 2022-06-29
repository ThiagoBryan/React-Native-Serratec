import React from "react";
import CadastroProdutos from "./src/screen/cadastroDeProdutos";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";


// const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Cadastro de Produtos" component={CadastroProdutos} />   
    //   </Stack.Navigator>
    // </NavigationContainer>

    <CadastroProdutos />
 
  );
}

export default App;