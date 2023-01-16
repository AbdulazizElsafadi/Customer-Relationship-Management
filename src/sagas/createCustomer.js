import { put, select, takeLatest, delay } from "redux-saga/effects";
import * as customerActions from "../reducers/customerSlice";
import * as regionActions from "../reducers/regionSlice";
import generateUID from "../utilities/generateID.js";

export function* watchCreateCustomer() {
  yield takeLatest(
    customerActions.createCustomer_Async.toString(),
    takeCreateCustomer
  );
}

export function* takeCreateCustomer() {
  console.log("Starting to create a customer to API");
  try {
    const fields = yield select((state) => state.customer.form.fields);
    const currentCustomerRegion = yield select(
      (state) => state.regions.regions[fields.region]
    );

    // pretend call to API
    yield delay(500);

    const customer = {
      id: generateUID(),
      ...fields,
    };
    yield put(customerActions.createCustomer(customer));

    // to customer to region
    const regionID = customer.region;
    const customerRegion = [...currentCustomerRegion.customers, customer.id];

    yield put(regionActions.addCustomerToRegion({ regionID, customerRegion }));
  } catch (error) {
    yield put(customerActions.createCustomerError(error.toString()));
  }
}
