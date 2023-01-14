import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "../reducers";
import saga from "../sagas";
import createSagaMiddleware from "redux-saga";

// ***** DON'T FORGET THIS STATEMENT WHETHER IT'S IMPORTANT OR NOT
// preloadedState = {}
const initializeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {},
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(saga);

  return store;
};

export default initializeStore;
