import { useEffect, useState } from "react";
import Tesla from "../../src/assets/Login/Tesla1.png";
import ShowEye from "../../src/assets/Login/Showpassword.png"
import HideEye from "../../src/assets/Login/Hidepassword.png"
function Forgot() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const validateEmail = () => {
      if (email === "") {
        setEmailError("");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    };
    const validatePassword = () => {
      if (password === "") {
        setPasswordError("");
      } else if (password.length < 6) {
        setPasswordError(
          "Invalid password, must be at least 6 characters long"
        );
      } else {
        setPasswordError("");
      }
    };
    validateEmail();
    validatePassword();
  }, [email, password]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailError && !passwordError) {
      alert(
        `Form submitted successfully! Your email ${email} has been submitted.`
      );
      console.log(email, password);
    } else if (emailError && passwordError) {
      alert("Please fix the email address and password errors in the form.");
    } else if (emailError) {
      alert("Please fix the email address error in the form.");
    } else if (passwordError) {
      alert("Please fix the password error in the form.");
    } else {
      console.log("Unknown error, please refresh your browser");
    }
  }

  

  return (
    <section>
        <img
          src={Tesla}
          className="w-full h-[911px] absolute object-cover "
          alt="Loginbg"
        />

      <div className="flex justify-center">
        <div className="w-[1440px] relative flex justify-end ">
          <form
            onSubmit={handleSubmit}
            className="bg-white h-[772px] w-[456px] relative mt-[104px] rounded-[10px] shadow-md"
          >
            <div className="mx-[48px] mt-[128px]">
              <div className="text-[24px] mb-[24px]">
                ลืมรหัสผ่าน?
              </div>

              <div className="text-[14px]">
                ป้อนที่อยู่อีเมลหรือหมายเลขโทรศัพท์ที่คุณใช้กับบัญชีของคุณเพื่อดำเนินการต่อ
              </div>

              <div className="mt-[24px] ">
                <h3 className="text-[12px] font-medium text-gray-900 mb-[8px]">อีเมลที่เคยสมัครสมาชิกแล้ว</h3>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-[6px] focus:ring-primary-600 focus:border-primary-600 w-[360px] h-[48px] 
                    ${emailError ? "border-red-500" : ""}`}
                  placeholder="  name@company.com  "
                />
                {emailError && email !== "" && (
                  <p className="text-red-500  text-[12px]  ">{emailError}</p>
                )}
              </div>

              <button
                type="submit"
                className=" text-white bg-[#1E3769] mt-[32px] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-[6px] text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-[360px] h-[40px]"
              >
                ดำเนินการต่อ
              </button>

              
              
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Forgot;