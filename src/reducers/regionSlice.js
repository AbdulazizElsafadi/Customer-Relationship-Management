import { createSlice } from "@reduxjs/toolkit";

const name = "regions";

const initialState = {
  regions: {
    "South West": {
      name: "South West",
      customers: [],
    },
    "North West": {
      name: "North West",
      customers: [],
    },
    "South East": {
      name: "South East",
      customers: [],
    },
    "North East": {
      name: "North East",
      customers: [],
    },
    "Mid West": {
      name: "Mid West",
      customers: [],
    },
  },
};

const reducers = {
  addCustomerToRegion: (state, { payload }) => {
    // console.log("payload:", payload);
    state.regions[payload.regionID].customers = payload.customerRegion;
  },
  editCustomerToRegion: (state, { payload }) => {
    console.log("payload of editCustomerToRegion:", payload);
    state.regions[payload.oldRegionID].customers.filter(
      (customer) => customer != payload.customerID
    );
    state.regions[payload.newRegionID].customers.push(payload.customerID);
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const { addCustomerToRegion, editCustomerToRegion } = slice.actions;

export default slice.reducer;
