import { useRoute } from "@react-navigation/native";
import { useEditCustomer } from "../../hooks";
import Form from "../Form";

const Edit = () => {
  const { params } = useRoute();
  const { customer } = params;
  const { onSubmit } = useEditCustomer(customer.id);
  return <Form handleSubmit={onSubmit} customer={customer} />;
};

export default Edit;
