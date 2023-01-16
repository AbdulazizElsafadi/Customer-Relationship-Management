import { useRoute } from "@react-navigation/native";
import { useCreateCustomer } from "../../hooks";
import Form from "../Form";

const Create = () => {
  const { params } = useRoute();
  const { customer } = params;
  const { onSubmit } = useCreateCustomer();
  return <Form handleSubmit={onSubmit} customer={customer} />;
};

export default Create;
