import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Grs = () => {
  const [rs, setRs] = useState("");
  const [gm, setgm] = useState("");
  const [tgm, settgm] = useState("");

  const [Price, setPrice] = useState(0);

  const convert = () => {
    let twkg = tgm * 1000;
    let kgw = gm * 1000;
    setPrice((rs * twkg) / kgw);
  };

  return (
    <View style={styles.main}>
      <ScrollView
        style={{ paddingTop: 40 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ fontWeight: "bold" }}>Kg Wight..</Text>
        <TextInput
          style={styles.inp}
          value={gm}
          keyboardType="numeric"
          onChangeText={(text) => setgm(text)}
        />

        <Text style={{ fontWeight: "bold", marginTop: 30 }}>Kg Rs Price..</Text>
        <TextInput
          style={styles.inp}
          value={rs}
          keyboardType="numeric"
          onChangeText={(text) => setRs(text)}
        />

        <Text style={{ fontWeight: "bold", marginTop: 30 }}>
          Enter Total Kg To Convert
        </Text>
        <TextInput
          style={styles.inp}
          value={tgm}
          keyboardType="numeric"
          onChangeText={(text) => settgm(text)}
        />

        <Text style={styles.btn} onPress={convert}>
          Convert Now
        </Text>
        <Text style={styles.rs}>{Price} RS</Text>
      </ScrollView>
    </View>
  );
};

export default Grs;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#ffffff",
    flex: 1,

    paddingHorizontal: 40,
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
    marginBottom: 90,
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 80,
  },
});
