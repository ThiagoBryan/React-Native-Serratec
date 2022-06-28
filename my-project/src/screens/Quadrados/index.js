import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export const Quadrados = () =>  {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            background: "black",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            background: "blue",
            justifyContent: "space-between",
          }}
        />
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          background: "red",
          alignSelf: "center",
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: 100, height: 100, background: "yellow" }} />
        <View style={{ width: 100, height: 100, background: "pink" }} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
});

