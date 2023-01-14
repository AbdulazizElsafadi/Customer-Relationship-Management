import { Provider } from "react-redux";
import createStore from "./src/store";
import Navigation from "./src/Navigation";

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export default App;
