import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";

const Welcome = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>{"Welcome to Customer Manager Plus"}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
