import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import styles from "./styles";

const RegionsList = () => {
  const { navigate } = useNavigation();

  const regions = [
    "South West",
    "North West",
    "Mid West",
    "South East",
    "North East",
  ];

  const renderRegions = (region) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("CustomersList", { region })}
      >
        <Text style={styles.text}>{region}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.h1, { marginBottom: 50, marginTop: 30 }]}>
        Regions List
      </Text>

      <TouchableOpacity
        style={[styles.button, { marginBottom: 50 }]}
        onPress={() => navigate("Create", { customer: null })}
      >
        <Text style={styles.text}>Create new User</Text>
      </TouchableOpacity>

      <Text style={styles.h1}>Choose a Region:</Text>

      <FlatList
        data={regions}
        renderItem={({ item }) => renderRegions(item)}
      ></FlatList>
    </View>
  );
};

export default RegionsList;
