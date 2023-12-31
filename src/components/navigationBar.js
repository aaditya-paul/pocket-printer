"use client";

import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function NavigationBar({page}) {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    // Code to toggle the overflow property based on the `toggle` state
    document.body.style.overflow = toggle ? "hidden" : "auto";

    // Clean up: Reset the overflow property when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);
  return (
    <div>
      {/* dektop */}
      <div className="hidden justify-center m-5 md:flex">
        <Link href="/">
          <p className=" text-slate-700 p-5 text-2xl font-semibold">
            Pocket~Prints <sup>TM</sup>
          </p>
        </Link>
        <div className="text-slate-700 text-md flex p-5 ">
          <Link
            href="/"
            className={
              page === "home"
                ? `px-5 underline underline-offset-8 hover:cursor-pointer`
                : `px-5 hover:underline underline-offset-8 hover:cursor-pointer`
            }
          >
            Home
          </Link>
          <Link
            href={`/products`}
            className={
              page === "products"
                ? `px-5 underline underline-offset-8 hover:cursor-pointer`
                : `px-5 hover:underline underline-offset-8 hover:cursor-pointer`
            }
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={
              page === "contact"
                ? `px-5 underline underline-offset-8 hover:cursor-pointer`
                : `px-5 hover:underline underline-offset-8 hover:cursor-pointer`
            }
          >
            Contact
          </Link>
        </div>
        <div className=" text-slate-700 text-lg flex p-5">
          <Link
            href="/search"
            className="hover:scale-110 transform ease-linear duration-200"
          >
            <p className="px-5">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </p>
          </Link>
          <Link
            href="/cart"
            className="hover:scale-110 transform ease-linear duration-200"
          >
            <p className="px-5">
              <FontAwesomeIcon icon={faBagShopping} />
            </p>
          </Link>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden  p-5">
        <div className="flex justify-between">
          <Link href="/">
            <p className=" text-slate-700 sm:text-lg md:text-xl font-medium">
              Pocket~Prints <sup>TM</sup>
            </p>
          </Link>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <FontAwesomeIcon
              icon={!toggle ? faBars : faXmark}
              className={`text-2xl align-middle `}
            />
          </button>

          <div
            className={`w-full top-16 fixed z-50 h-full bg-white ${
              toggle ? "right-0" : "-right-[100%]"
            } duration-500 transition-all text-xl`}
          >
            <div className="">
              <div className="text-slate-700 text-md flex flex-col  ">
                <Link
                  href="/"
                  className={
                    page === "home"
                      ? `p-5 justify-center text-center  underline underline-offset-8 hover:cursor-pointer`
                      : `p-5 justify-center text-center  hover:underline underline-offset-8 hover:cursor-pointer`
                  }
                >
                  Home
                </Link>
                <Link
                  href={`/products`}
                  className={
                    page === "products"
                      ? `p-5 justify-center text-center  underline underline-offset-8 hover:cursor-pointer`
                      : `p-5 justify-center text-center  hover:underline underline-offset-8 hover:cursor-pointer`
                  }
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className={
                    page === "contact"
                      ? `p-5 justify-center text-center  underline underline-offset-8 hover:cursor-pointer`
                      : `p-5 justify-center text-center  hover:underline underline-offset-8 hover:cursor-pointer`
                  }
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
