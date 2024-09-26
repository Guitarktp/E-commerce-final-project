import Payment from "../components/components_checkout/payment";
import Progress2 from "../components/components_checkout/progress2";
import Login_for_checkout from "../components/components_checkout/login_for_checkout";
import Product_details from "../components/components_checkout/product_details";
import { useLocation } from "react-router-dom";

function Checkout2() {
  const { state } = useLocation();
  const transaction = state;
  return (
    <div className="flex flex-col items-center text-base">
      <Progress2 />
      <div className="w-[1128px] flex justify-start item"></div>
      <div className="w-[1128px]  flex gap-x-[24px] ">
        <div className="flex flex-col w-[744px]">
          <Payment data={{ transaction }} />
        </div>
        <Product_details data={{ transaction }} />
      </div>
    </div>
  );
}

export default Checkout2;
