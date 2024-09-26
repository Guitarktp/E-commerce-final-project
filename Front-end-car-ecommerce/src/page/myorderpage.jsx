import Progress from "../components/components_checkout/progress";
import Login_for_checkout from "../components/components_checkout/login_for_checkout";
import Forum from "../components/components_checkout/forum";
import Product_details from "../components/components_checkout/product_details";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import UserMenu from "../components/component_userprofile/usermenu";
import CarFavourite from "../components/component_userprofile/carfavourite";
import MyOrder from "../components/component_userprofile/myorder";

function MyOrderPage() {


  return (
    <div className="flex flex-col items-center text-base">
   
      <div className="w-[1128px] flex gap-x-[24px] my-16">
        <div className="flex flex-col w-[264px]">
          <UserMenu />
        </div>
        <div className="flex flex-col w-[840px]">
          <MyOrder />
        </div>
        
      </div>
    </div>
  );
}

export default MyOrderPage;