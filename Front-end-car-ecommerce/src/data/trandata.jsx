import { getTransaction } from "../components/API/API_Transaction";

export const Trandata = async (id) => {
  const res = await getTransaction(id);
  return res;
};
