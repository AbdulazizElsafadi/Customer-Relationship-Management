import { StyleSheet } from "react-native";

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: "#14406e",
    padding: 20,
    borderRadius: "50%",
    fontWeight: "bold",
    marginBottom: 15,
    cursor: "pointer",
  },

  h1: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
    fontSize: 24,
    color: "#14406e",
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default welcomeStyles;
