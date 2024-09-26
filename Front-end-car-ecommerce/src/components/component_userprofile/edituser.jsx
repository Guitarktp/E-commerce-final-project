import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { editUser } from "../API/API_Users";
import { getUserById } from "../API/API_Users";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2'


function EditUser() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      FirstName: '',
      LastName: '',
      Email: '',
      pnumber: '',
    });
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const token = localStorage.getItem('token');
          if (token) {
            const decoded = jwtDecode(token);
            const userId = decoded.id; // ถอดรหัส JWT เพื่อดึง userId
  
            const user = await getUserById(userId); // ดึงข้อมูลผู้ใช้จาก API ด้วย userId
            setFormData({
              FirstName: user.FirstName,
              LastName: user.LastName,
              Email: user.Email,
              pnumber: user.pnumber,
            });
          }
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };
  
      fetchUser();
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const decoded = jwtDecode(token);
          const userId = decoded.id; 
  
          await editUser(userId, formData); // ส่งข้อมูลแก้ไขผู้ใช้ไปยัง API ด้วย userId
          await Swal.fire({
            title: "อัปรูปโปรไฟล์สำเร็จ",
            text: "แก้ไขข้อมูลผู้ใช้เรียบร้อยแล้ว",
            icon: "success",
          });
          navigate('/'); 
          window.location.reload();
        }
      } catch (error) {
        console.error('Error editing user:', error);
        Swal.fire({
          title: "ล้มเหลว",
          text: "เกิดข้อผิดพลาด",
          icon: "error",
        });
      }
    };
  return (
    <form onSubmit={handleSubmit} className="mb-[55px]">
      <div className="flex flex-col border border-[#E1E1E1] rounded-[20px] px-6 pt-[28px] ">
        <p className="font-semibold text-2xl mb-6">จัดการบัญชีโปรไฟล์</p>
        <div className="flex">
          <div>
            <p className="font-medium text-sm mb-2">อีเมล</p>
            <input
              type="text"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="h-[48px] w-[384px] mb-6 px-5 rounded-2xl border border-[#E1E1E1] text-base hover:border-blue-300 focus:outline-none focus:border-sky-700 focus:ring-sky-700 focus:ring-1 duration-200"
            />
          </div>

          <div className="ml-6">
            <p className="font-medium text-sm mb-2">เบอร์</p>
            <input
              type="text"
              name="pnumber"
              value={formData.pnumber}
              onChange={handleChange}
              placeholder="เบอร์โทรศัพท์ส่วนตัว"
              className="h-[48px] w-[384px] px-5 rounded-2xl border border-[#E1E1E1]  text-base hover:border-blue-300 focus:outline-none focus:border-sky-700 focus:ring-sky-700 focus:ring-1 duration-200"
            />
          </div>
        </div>

        <div className="flex">
          <div>
            <p className="font-medium text-sm mb-2">ชื่อจริง</p>
            <input
              type="text"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
              placeholder="ชื่อจริง"
              className="h-[48px] w-[384px] px-5 rounded-2xl border border-[#E1E1E1]  text-base hover:border-blue-300 focus:outline-none focus:border-sky-700 focus:ring-sky-700 focus:ring-1 duration-200"
            />
          </div>

          <div className="ml-6">
            <p className="font-medium text-sm mb-2">นามสกุล</p>
            <input
              type="text"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              placeholder="นามสกุล"
              className="h-[48px] w-[384px] px-5 rounded-2xl border border-[#E1E1E1]  text-base hover:border-blue-300 focus:outline-none focus:border-sky-700 focus:ring-sky-700 focus:ring-1 duration-200"
            />
          </div>
        </div>

        <button
        
          type="submit"
          className="h-[48px] bg-[#3E5685] rounded-[10px] text-white text-[18px] flex justify-center items-center mt-8 mb-4 hover:bg-[#677FAF] duration-200"
        >
          ยืนยัน
        </button>
      </div>
      <div
        id="hire"
        className="mt-6 h-[48px] w-[840px] border border-[#E1E1E1] rounded-[15px] flex justify-between items-center"
      >
        <span className="font-medium text-sm ml-6">เปลี่ยนรูปโปรไฟล์</span>
        <Link 
        to = "/uploadprofile"
        className="font-medium text-sm mr-6 text-red-600">แก้ไข
        </Link>
      </div>
    </form>
  );
}

export default EditUser;











// function EditUser({ data }) {
//     const { transaction, setTransaction } = data;

//     const handleChange = async (e) => {
//       const { name, value } = e.target;
//       await setTransaction({ ...transaction, [name]: value });
//     };

//     useEffect(() => {
//       console.log(transaction);
//     }, [transaction]);

//     return (
//       <form id="informUser" className="mb-[55px]">
//         <div className="flex flex-col  border border-[#E1E1E1] rounded-[20px]  px-6 pt-[28px] pb-10 text-base">
//           <p className="font-semibold text-2xl mb-8 ">กรอกข้อมูล</p>
//           <label className="font-medium text-sm mb-2 ">ที่อยู่จัดส่ง</label>
//           <input
//             type="text"
//             name="address"
//             value={transaction.address}
//             onChange={handleChange}
//             placeholder="ที่อยู่"
//             className="  h-[56px] mb-6   px-5 rounded-2xl border border-[#E1E1E1] font-medium text-base"
//           />
//           <label className="font-medium text-sm mb-2 ">ข้อมูลเพิ่มเติม</label>
//           <input
//             type="text"
//             name="etc"
//             value={transaction.etc}
//             onChange={handleChange}
//             placeholder="ข้อมูลเพิ่มเติม (ถ้ามี) "
//             className=" h-[56px] mb-6   px-5 rounded-2xl border border-[#E1E1E1] font-medium text-base"
//           />
//           <label className="font-medium text-sm mb-2 ">เลือกวันที่รับรถ</label>
//           <input
//             type="date"
//             name="Sell_Date"
//             value={transaction.Sell_Date}
//             onChange={handleChange}
//             placeholder="เลือกวันที่"
//             className=" h-[56px]   px-5 rounded-2xl border border-[#E1E1E1]  font-medium text-base"
//           />
//         </div>
//         <div
//           id="hire"
//           className="mt-10  px-6 pt-3 pb-4  grid grid-cols-1 grid-rows-2 border border-[#E1E1E1] rounded-[20px]"
//         >
//           <div className="flex  ">
//             <input type="checkbox" className="h-4 w-4 mr-2 mt-1" />
//             <label>กรุณาตรวจสอบข้อมูลการเช่าให้ครบถ้วนก่อนการกดยืนยัน</label>
//           </div>
//           <Link
//             to="/Checkout2"
//             className=" h-[48px] bg-[#3E5685] rounded-[10px] text-white text-2xl flex justify-center"
//             state={transaction}
//           >
//             <input
//               type="submit"
//               value="เช่ารถคันนี้"
//               className="cursor-pointer border-none text-lg"
//             />
//           </Link>
//         </div>
//       </form>
//     );
//   }
