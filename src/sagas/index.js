import { all } from "redux-saga/effects";
import { watchCreateCustomer } from "./createCustomer";

export default function* animal() {
  yield all([
    // TODO: add all created sagas
    watchCreateCustomer(),
  ]);
}
