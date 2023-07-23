import NavigationBar from "@/components/navigationBar";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className=" text-slate-800 text-4xl justify-center flex-col p-10">
        <p className="text-center p-2">404</p>
        <p className="text-center p-2"> Page not found !</p>
        <p className="text-center p-2">:(</p>
      </div>
      <div className=" text-gray-800 flex justify-center ">
        <Link href="/">
          <p className=" p-5 bg-teal-900 text-white text-lg rounded-xl">
            Return To Homepage
          </p>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
