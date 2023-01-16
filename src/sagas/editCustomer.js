import { put, select, takeLatest, delay } from "redux-saga/effects";
import * as customerActions from "../reducers/customerSlice";
import * as regionActions from "../reducers/regionSlice";
import generateUID from "../utilities/generateID.js";

export function* watchEditCustomer() {
  yield takeLatest(
    customerActions.editCustomer_Async.toString(),
    takeEditCustomer
  );
}

export function* takeEditCustomer(action) {
  console.log("Starting to edit a customer to API");
  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customerID = action.payload;

    // maybe one equal
    const oldCustomer = select((state) =>
      state.customer.customers.find((customer) => customer == customerID)
    );
    console.log("oldCustomer:", oldCustomer);

    const newCustomer = {
      id: customerID,
      ...fields,
    };
    yield put(customerActions.editCustomer(newCustomer));

    // pretend call to API
    yield delay(500);

    // to customer to region
    const oldRegionID = oldCustomer.region;
    const newRegionID = newCustomer.region;
    yield put(
      regionActions.editCustomerToRegion({
        oldRegionID,
        newRegionID,
        customerID: newCustomer.id,
      })
    );

    // editing customer information
  } catch (error) {
    yield put(customerActions.editCustomerError(error.toString()));
  }
}
