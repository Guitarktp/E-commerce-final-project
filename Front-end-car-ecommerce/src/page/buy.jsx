import React, { useState } from "react";
import bg from "../assets/cardcar.jsx/bg/bg.png";
import bgnew from "../assets/Logo/peakpx 1.png";
import Selldata  from "../data/selldata";



function Buy() {

  return (
    <>
      <hero>
        <img
          className="absolute mt-14 md:mt-0 md:absolute w-full md:py-0 sm:h-1/3 h-[120px]"
          src={bgnew}
          alt=""
        />
        <div className="pt-20 md:py-0">
          <h1 className="relative flex justify-center text-white text-4xl md:py-20 font-semibold ">
            บริการซื้อรถยนต์
          </h1>
        </div>
      </hero>
     
      <Selldata />
    </>
  );
}

export default Buy;
