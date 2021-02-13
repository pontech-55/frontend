import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default function Entities({ navigation }) {
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>Vista de entidades</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "space-around" },
});
