import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Rotas from './Rotas';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}