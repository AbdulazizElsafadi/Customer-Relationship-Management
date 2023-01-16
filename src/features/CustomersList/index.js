import { useNavigation, useRoute } from "@react-navigation/native";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const CustomersList = () => {
  const route = useRoute();
  const region = route.params.region;

  const { navigate } = useNavigation();

  const Customer = (id, firstName, lastName, active, region) => {
    return {
      id,
      firstName,
      lastName,
      active,
      region,
    };
  };

  const omar = Customer(1, "omar", "Aslafadi", true, "South West");
  const fhad = Customer(2, "Fahd", "Alenria", false, "South East");
  const Khalid = Customer(3, "Khalid", "Jourge", true, "MID West");
  const Abdulaziz = Customer(4, "Abdulaziz", "anything", false, "North West");
  const ahmed = Customer(5, "Ahmed", "something", true, "North East");

  const customers = [omar, fhad, Khalid, Abdulaziz, ahmed];

  const renderCustomer = ({ item }) => {
    return (
      <View style={styles.customer}>
        <TouchableOpacity
          style={[styles.button, styles.customerButton]}
          onPress={() => navigate("Customer", { customer: item })}
        >
          <Text style={[styles.text]}>View Details</Text>
        </TouchableOpacity>
        <Text style={styles.itemText}>ID: {item.id}</Text>
        <Text style={styles.itemText}>First Name: {item.firstName}</Text>
        <Text style={styles.itemText}>Last Name: {item.lastName}</Text>
        <Text style={styles.itemText}>Active: {item.active}</Text>
        <Text style={styles.itemText}>Region: {item.Region}</Text>
      </View>
    );
  };

  const headerComponent = () => (
    <Text style={styles.h1}>{region} Customers</Text>
  );

  return (
    <View>
      <FlatList
        ListHeaderComponent={headerComponent}
        ListHeaderComponentStyle={styles.listHeader}
        ListEmptyComponent={<Text>No Customer in {region}</Text>}
        data={customers}
        renderItem={renderCustomer}
      />
    </View>
  );
};

export default CustomersList;
