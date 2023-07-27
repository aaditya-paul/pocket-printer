import React from "react";
import NavigationBar from "./navigationBar";
import Image from "next/image";
import FeaturedProduct from "./featuredProduct";

function Home() {
  return (
    <div>
      <NavigationBar page="home" />
      <div>
        <div className="flex justify-center bg-bg-blur h-[650px] bg-cover bg-center">
          <div className=" bottom-[30%]  items-center flex flex-col justify-center md:p-5 p-2 pt-5">
            <p className="pb-1 md:pb-5 text-3xl  md:text-5xl text-black font-assistant  ">
              Thermal Pocket Printer
            </p>
            <p className="pb-1 md:pb-5 text-xl md:text-xl text-[#121212bf] font-assistant font-thin">
              Print anywhere on the go
            </p>
            <button className=" m-3 px-10 py-3  bg-black text-white">
              <p className="font-medium">Buy Now</p>
            </button>
          </div>
        </div>
      </div>
      {/* featured */}
      <div>
        <FeaturedProduct />
      </div>
    </div>
  );
}

export default Home;
