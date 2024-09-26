
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import UserMenu from "../components/component_userprofile/usermenu";
import EditUser from "../components/component_userprofile/edituser";
import { useNavigate } from "react-router-dom";

function UserProfile() {


 


  return (
    <div className="flex flex-col items-center text-base">
   
      <div className="w-[1128px] flex gap-x-[24px] mt-16">
        <div className="flex flex-col w-[264px]">
          <UserMenu />
        </div>
        <div className="flex flex-col w-[840px]">
          <EditUser/>
        </div>
        
      </div>
    </div>
  );
}

export default UserProfile;


  // let { state } = useLocation();

  // const [transaction, setTransaction] = useState(state);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const id = jwtDecode(token).id;
  //   setTransaction((prevTransaction) => ({
  //     ...prevTransaction,
  //     address: "",
  //     etc: "",
  //     Purchase_User: id,
  //   }));
  // }, []);
  // console.log("transaction:", transaction);
