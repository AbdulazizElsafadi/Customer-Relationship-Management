import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>To View the regions click below button</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("RegionsList")}
      >
        <Text style={styles.text}>Continue to Regions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>clear all information</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
