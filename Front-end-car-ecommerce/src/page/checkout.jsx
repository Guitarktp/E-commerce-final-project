import Progress from "../components/components_checkout/progress";
import Login_for_checkout from "../components/components_checkout/login_for_checkout";
import Forum from "../components/components_checkout/forum";
import Product_details from "../components/components_checkout/product_details";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function checkout() {
  let { state } = useLocation();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState(state);
  useEffect(() => {
    const token = localStorage.getItem("token");

    try {
      const id = jwtDecode(token).id;
      setTransaction((prevTransaction) => ({
        ...prevTransaction,
        address: "",
        etc: "",
        Purchase_User: id,
      }));
    } catch (error) {
      Swal.fire({
        title: "กรุณาเข้าสู่ระบบ",
        icon: "error",
      });
      navigate("/loginandregister");
    }
  }, []);
  // console.log("transaction:", transaction);

  return (
    <div className="flex flex-col items-center text-base">
      <Progress />
      <div className="w-[1128px] flex justify-start item"></div>
      <div className="w-[1128px]  flex gap-x-[24px] ">
        <div className="flex flex-col w-[744px]">
          <Forum data={{ transaction, setTransaction }} />
        </div>
        <Product_details data={{ transaction }} />
      </div>
    </div>
  );
}

export default checkout;
