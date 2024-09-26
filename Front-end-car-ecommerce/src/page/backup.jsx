// login form

<section>
<img
  src={Tesla}
  className="w-full h-[911px] absolute object-cover "
  alt="Loginbg"
/>

<div className="flex justify-center">
  <div className="w-[1440px] relative flex justify-end ">
    {!isRegistering && (
      //  <div className={`transition-transform duration-500 ${isRegistering ? '-translate-x-full' : 'translate-x-[240px'}`}>
      <form
        onSubmit={handleSubmit}
        className="bg-white h-[772px] w-[456px] relative mt-[104px] rounded-[10px] shadow-md"
      >
        <div className="mx-[48px] mt-[128px]">
          <span className="text-[24px]">ยินดีต้อนรับกลับมา!</span>
          <div className="mt-[24px] mb-[16px]">
            <h3 className="text-[12px] font-medium text-gray-900 mb-[8px]">
              อีเมล
            </h3>
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

          <div className="mb-[16px]">
            <h3 className="text-[12px] font-medium text-gray-900 mb-[8px]">
              รหัสผ่าน
            </h3>
            <div className="flex">
              <input
                type={hidePassword ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="  ••••••••  "
                className={`bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-[6px] relative focus:border-primary-600 w-[360px] h-[48px] ${
                  passwordError ? "border-red-500" : ""
                }`}
              />

              <img
                onClick={handleHidePassword}
                src={hidePassword ? ShowEye : HideEye}
                className=" cursor-pointer absolute place-self-center"
                alt={hidePassword ? "hide password" : "show password"}
              />
            </div>

            {passwordError && password !== "" && (
              <p className="text-red-500 text-[12px] ">{passwordError}</p>
            )}
          </div>

          <div className="flex place-content-between">
            <div className="flex">
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-primary-300"
                  required=""
                />
              </div>
              <div className="ml-3 text-[12px] place-self-center">
                <label htmlfor="terms" />
                เข้าสู่ระบบตลอดเวลา
              </div>
            </div>

            <div>
              <a
                href="#"
                className="text-[12px] over:underline text-red-600"
              >
                ลืมรหัสผ่าน?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className=" text-white bg-[#1E3769] my-[32px] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-[6px] text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-[360px] h-[40px]"
          >
            เข้าสู่ระบบ
          </button>

          <div className="flex ">
            <div className="mb-[32px] flex-grow border-t-[0.5px] border-gray-400"></div>
            <span className="mx-4 -mt-3 text-gray-500 text-sm">หรือ</span>
            <div className="flex-grow border-t-[0.5px] border-gray-400"></div>
          </div>

          <button
            type="submit"
            className=" text-white bg-[#333333]  mb-[24px] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-[6px] text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-[360px] h-[40px]"
          >
            เข้าสู่ระบบด้วย Google
          </button>

          <div className="text-sm font-light text-center">
            ยังไม่ได้เป็นสมาชิก?
            <button
              type="button"
              onClick={handleToggleForm}
              className="font-medium text-primary-600 hover:underline text-red-600"
            >
              สมัครเลย
            </button>
          </div>
        </div>
      </form>
    )}

    {/* register form */}

    {/* <div className={`transition-transform duration-500 ${isRegistering ? 'translate-x-0' : 'translate-x-full'}`}> */}
    {isRegistering && (
      // <div className="transform transition-transform duration-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white h-[772px] w-[456px] relative mt-[104px] rounded-[10px] shadow-md"
        // className={`bg-white h-[772px] w-[456px] relative mt-[104px] rounded-[10px] shadow-md transition-transform duration-500 ${isRegistering ? 'translate-x-20' : 'translate-x-0'}`}
      >
        <div className="mx-[48px] mt-[16px]">
          <span className="text-[24px]">สร้างบัญชีของคุณ</span>
          <div className="mt-[24px] mb-[16px]">
            <h3 className="text-[12px] font-medium text-gray-900 mb-[4px]">
              อีเมล
            </h3>
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

          <div className="mb-[16px]">
            <h3 className="text-[12px] font-medium text-gray-900 mb-[8px]">
              ชื่อจริง
            </h3>
            <input
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-[6px] focus:ring-primary-600 focus:border-primary-600 w-[360px] h-[48px]"
              placeholder="  ชื่อจริง  "
            />
          </div>

          <div className="mb-[16px]">
            <h3 className="text-[12px] font-medium text-gray-900 mb-[8px]">
              นามสกุล
            </h3>
            <input
              type="surname"
              name="surname"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-[6px] focus:ring-primary-600 focus:border-primary-600 w-[360px] h-[48px]"
              placeholder="  นามสกุล  "
            />
          </div>

          <div className="mb-[16px]">
            <h3 className="text-[12px] font-medium text-gray-900 mb-[8px]">
              รหัสผ่าน
            </h3>
            <div className="flex">
              <input
                type={hidePassword ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="  ••••••••  "
                className={`bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-[6px] relative focus:border-primary-600 w-[360px] h-[48px] ${
                  passwordError ? "border-red-500" : ""
                }`}
              />

              <img
                onClick={handleHidePassword}
                src={hidePassword ? ShowEye : HideEye}
                className=" cursor-pointer absolute place-self-center"
                alt={hidePassword ? "hide password" : "show password"}
              />
            </div>

            {passwordError && password !== "" && (
              <p className="text-red-500 text-[12px] ">{passwordError}</p>
            )}
          </div>

          <div className="mb-[16px]">
            <h3 className="text-[12px] font-medium text-gray-900 mb-[8px]">
              รหัสผ่าน
            </h3>
            <div className="flex">
              <input
                type={hidePassword ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="  ••••••••  "
                className={`bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-[6px] relative focus:border-primary-600 w-[360px] h-[48px] ${
                  passwordError ? "border-red-500" : ""
                }`}
              />

              <img
                onClick={handleHidePassword}
                src={hidePassword ? ShowEye : HideEye}
                className=" cursor-pointer absolute place-self-center"
                alt={hidePassword ? "hide password" : "show password"}
              />
            </div>

            {passwordError && password !== "" && (
              <p className="text-red-500 text-[12px] ">{passwordError}</p>
            )}
          </div>

          <div className="flex ">
            <div className="flex">
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-primary-300"
                  required=""
                />
              </div>
              <div className="ml-3 text-[12px] place-self-center">
                ยอมรับ
              </div>
            </div>

            <div>
              <a href="#" className="text-[12px]  text-red-600 ">
                เงื่อนไขสำหรับการสมัครสมาชิกและนโยบายความเป็นส่วนตัว
              </a>
            </div>
          </div>

          {/* <div className="flex">
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-primary-300"
                required=""
              />
            </div>
            <div className="ml-3 text-[12px] place-self-center">
              ฉันยินดีที่จะรับข้อมูลข่าวสารผ่านทางอีเมล
            </div>
          </div> */}

          <button
            type="submit"
            className=" text-white bg-[#1E3769] mt-[16px] mb-[32px] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-[6px] text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-[360px] h-[40px]"
          >
            สมัครสมาชิก
          </button>

          <div className="flex ">
            <div className="mb-[32px] flex-grow border-t-[0.5px] border-gray-400"></div>
            <span className="mx-4 -mt-3 text-gray-500 text-sm">หรือ</span>
            <div className="flex-grow border-t-[0.5px] border-gray-400"></div>
          </div>

          <button
            type="submit"
            className=" text-white bg-[#333333]  mb-[24px] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-[6px] text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-[360px] h-[40px]"
          >
            เข้าสู่ระบบด้วย Google
          </button>

          <div className="text-sm font-light text-center">
            เป็นสมาชิกแล้ว?
            <button
              type="button"
              onClick={handleToggleForm}
              className="font-medium text-primary-600 hover:underline text-red-600"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </form>
      // </div>
    )}
  </div>
</div>
</section>


export default Login;