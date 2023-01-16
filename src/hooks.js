import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers/customerSlice";

export const useUpdateFields = (customer = null) => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.customer.form.fields);

  useEffect(() => {
    if (customer) {
      dispatch(actions.setForm(customer));
    } else {
      console.log("customer is not dispatched:", customer);
    }
  }, [customer]);

  return {
    fields,
    setFormField: (field, value) => {
      // console.log(`Updating field ${field} to ${value}`);

      dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useCreateCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching createCustomer_Async action");
      dispatch(actions.createCustomer_Async());
    },
  };
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching createCustomer_Async action");
      dispatch(actions.editCustomer_Async(customerID));
    },
  };
};

// export const useResetFields = () => {
//   const dispatch = useDispatch();
//   return {
//     resetFields: () => dispatch(actions.resetFields()),
//   };
// };
