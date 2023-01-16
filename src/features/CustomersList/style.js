import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  customer: {
    borderWidth: 5,
    borderColor: "#14406e",
    borderRadius: "20%",
    justifyContent: "space-between",
    padding: 10,
    margin: 15,
  },
  customerButton: {
    position: "absolute",
    right: 10,
    marginTop: 35,
    zIndex: 1,
    width: 120,
    height: 60,
  },
  itemText: {
    fontFamily: "Times New Roman",
    fontSize: 20,
  },
  listHeader: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
