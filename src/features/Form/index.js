import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useResetFields, useUpdateFields } from "../../hooks";
import styles from "./styles";

const Form = ({ handleSubmit, customer }) => {
  const { navigate } = useNavigation();

  // const { resetFields } = useResetFields();

  // useEffect(() => {
  //   resetFields();
  // }, []);

  const { fields, setFormField } = useUpdateFields(customer);

  const { firstName, lastName, active, region } = fields;

  const onSubmit = () => {
    handleSubmit();
    navigate("CustomersList", { region });
  };

  const regions = [
    "South West",
    "North West",
    "Mid West",
    "South East",
    "North East",
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.h1}>Enter the customer full name</Text>
        <TextInput
          style={styles.input}
          placeholder="first name"
          value={firstName || ""}
          onChangeText={(value) => setFormField("firstName", value)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="last name"
          value={lastName || ""}
          onChangeText={(value) => setFormField("lastName", value)}
        ></TextInput>

        <View style={{ marginBottom: 40 }} />

        <Text style={styles.h1}>Is he/she Active?</Text>
        <TouchableOpacity
          style={active == "active" ? styles.onActive : styles.button}
          onPress={() => setFormField("active", "active")}
        >
          <Text style={active == "active" ? styles.onActiveText : styles.text}>
            Active
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={active == "inactive" ? styles.onActive : styles.button}
          onPress={() => setFormField("active", "inactive")}
        >
          <Text
            style={active == "inactive" ? styles.onActiveText : styles.text}
          >
            Inactive
          </Text>
        </TouchableOpacity>

        <View style={{ marginBottom: 40 }} />

        <Text style={styles.h1}>Select a region:</Text>
        {regions.map((r) => {
          return (
            <TouchableOpacity
              key={r}
              onPress={() => setFormField("region", r)}
              style={r == region ? styles.onActive : styles.button}
            >
              <Text style={r == region ? styles.onActiveText : styles.text}>
                {r}
              </Text>
            </TouchableOpacity>
          );
        })}

        <View
          style={{
            marginVertical: 30,
            borderWidth: 5,
            borderColor: "#14406e",
            borderRadius: "50%",
          }}
        />

        <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
          <Text style={styles.text}>SAVE CUSTOMER</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Form;
