import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import RegionsListScreen from "../screens/RegionsListScreen";
import CustomersListScreen from "../screens/CustomersListScreen";
import Create from "../features/Create";
import Edit from "../features/Edit";
import CustomerScreen from "../screens/CustomerScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#14406e",
          },

          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="RegionsList" component={RegionsListScreen} />
        <Stack.Screen name="CustomersList" component={CustomersListScreen} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Customer" component={CustomerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
