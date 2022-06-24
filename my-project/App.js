import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

// import { Container } from './styles';

const Teste = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: 250,
          height: 330,
          backgroundColor: "grey",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            padding: 20,
          }}
        >
          Login
        </Text>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              width: 230,
              height: 50,
              backgroundColor: "white",
              alignSelf: "center",
              borderRadius: 10,
            }}
          />
          <View
            style={{
              width: 230,
              height: 50,
              backgroundColor: "white",
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 10,
            }}
          />
        </View>
        <Pressable style={styles.input} >
          <Text style={{color: "white", fontWeight: "bold"}}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 120,
    height: 50,
    backgroundColor: "black",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 10,
    justifyContent:"center", 
    alignItems:"center",
    elevation: 5 // pesquisar
  },
});

export default Teste;
