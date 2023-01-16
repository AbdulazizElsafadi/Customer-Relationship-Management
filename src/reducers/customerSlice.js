import { createSlice } from "@reduxjs/toolkit";

const name = "customer";

const initialState = {
  customers: {},
  form: {
    fields: {
      firstName: "",
      lastName: "",
      active: "",
      region: "",
    },
  },
};

const reducers = {
  createCustomer_Async: (state) => {},

  editCustomer_Async: (state, { payload }) => {},

  createCustomer: (state, { payload }) => {
    state.customers[payload.id] = { ...payload };
    state.form.fields = initialState.form.fields;
  },

  setFormField: (state, { payload }) => {
    const current = state.form.fields;
    const { field, value } = payload;

    const fields = {
      ...current,
      [field]: value,
    };

    state.form.fields = fields;
  },

  createCustomerError: () => {
    console.log("error occurred in adding a new customer");
  },
  editCustomerError: () => {
    console.log("error occurred in editing a customer");
  },

  setForm: (state, { payload }) => {
    console.log("payload in setForm:", payload);
    if (payload) {
      state.form.fields = { ...payload };
    } else {
      state.error.message = `could not find animal with id: ${payload}`;
    }
  },

  resetFields: (state) => {
    state.form.fields = {};
  },

  editCustomer: (state, { payload }) => {
    state.customers[payload.newCustomer.id] = payload.newCustomer;
    state.form.fields = initialState.form.fields;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createCustomer_Async,
  editCustomer_Async,
  createCustomer,
  setFormField,
  createCustomerError,
  setForm,
  // resetFields,
  editCustomer,
  editCustomerError,
} = slice.actions;

export default slice.reducer;
