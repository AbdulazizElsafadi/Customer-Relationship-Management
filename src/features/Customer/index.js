import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Customer = () => {
  const { navigate } = useNavigation();
  const route = useRoute();

  const customer = route.params.customer;

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        {customer.firstName} {customer.lastName}
      </Text>
      <Text style={styles.h1}>
        Customer is:{" "}
        <Text style={styles.text}>
          {customer.active ? "Active" : "Inactive"}
        </Text>
      </Text>

      <Text style={styles.h1}>
        Customer is From: <Text style={styles.text}>{customer.Region}</Text>
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("Edit", { customer })}
      >
        <Text style={{ color: "white" }}>Edit {customer.firstName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Customer;
