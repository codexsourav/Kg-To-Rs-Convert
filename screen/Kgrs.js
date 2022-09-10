import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Kgrs = () => {
  const [rs, setRs] = useState("");
  const [kg, setKg] = useState("");
  const [Price, setPrice] = useState(0);

  const convert = () => {
    let total = kg * rs;
    setPrice(total);
  };
  return (
    <View style={styles.main}>
      <Text style={{ fontWeight: "bold" }}>Par 1 Kg Price RS..</Text>
      <TextInput
        style={styles.inp}
        value={rs}
        keyboardType="numeric"
        onChangeText={(text) => setRs(text)}
      />

      <Text style={{ fontWeight: "bold", marginTop: 40 }}>
        Enter Total KG To Convert
      </Text>
      <TextInput
        style={styles.inp}
        value={kg}
        keyboardType="numeric"
        onChangeText={(text) => setKg(text)}
      />

      <Text style={styles.btn} onPress={() => convert()}>
        Convert Now
      </Text>
      <Text style={styles.rs}>{Price} RS</Text>
    </View>
  );
};

export default Kgrs;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 30,
  },
  inp: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderColor: "#e0e0e0",
    borderRadius: 10,
  },
  btn: {
    borderWidth: 1,
    paddingVertical: 15,
    marginTop: 10,
    fontWeight: "bold",
    marginTop: 40,
    width: 180,
    borderColor: "#e0e0e0",
    borderRadius: 50,
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "#7a3cec",
    color: "white",
  },
  rs: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 80,
  },
});
