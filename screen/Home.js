import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.tit}>Convert Kg To RS App By Sourav</Text>
      <Text style={styles.opt} onPress={() => navigation.navigate("Kg")}>
        Kg To RS
      </Text>
      <Text style={styles.opt} onPress={() => navigation.navigate("Gm")}>
        GRUM To RS
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#e0e0e0",
    flex: 1,
    paddingTop: 40,
  },
  tit: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#00000",
    marginTop: 50,
    marginBottom: 30,
  },
  opt: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    color: "white",
    borderRadius: 20,
    marginBottom: 30,
    margin: 20,
    backgroundColor: "#333333",
    opacity: 0.8,
  },
});
