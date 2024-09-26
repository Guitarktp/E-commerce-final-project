import { delecttrans } from "../components/API/API_Transaction";

export const Detransaction = async(id)=>{
    const res = await delecttrans(id)
    return res
}