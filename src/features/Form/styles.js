import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    margin: 20,
  },
  button: {
    backgroundColor: "#14406e",
    padding: 20,
    borderRadius: "50%",
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 4,
    borderColor: "#14406e",
    borderRadius: "30%",
    color: "#14406e",
    fontWeight: "bold",
    fontSize: 14,
    padding: 15,
    marginBottom: 15,
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
  onActive: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: "50%",
    borderWidth: 4,
    borderColor: "#14406e",
    fontWeight: "bold",
    marginBottom: 15,
  },
  onActiveText: {
    color: "#14406e",
    textAlign: "center",
  },
});
