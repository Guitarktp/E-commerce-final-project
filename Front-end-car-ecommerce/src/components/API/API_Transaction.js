import axiosInstance from "../../utils/axiosInstance";

export const createTransaction = async (data) => {
  console.log("werun at transaction");
  try {
    const response = await axiosInstance.post("/transaction", data);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};


export const getTransaction = async (id) => {
  try {
    const response = await axiosInstance.get(`/transaction/${id}`);
    console.log("dataTrans", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    return null;
  }
};

export const delecttrans = async(id)=>{
  const response = await axiosInstance.delete(`/transaction/${id}`)
  return response
}