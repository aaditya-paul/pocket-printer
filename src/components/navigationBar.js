import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Products from "@/app/products/page";

function NavigationBar({page}) {
  console.log(page);
  return (
    <div>
      <div className="flex justify-center m-5">
        <Link href="/">
          <p className=" text-slate-700 p-5 text-2xl">
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
    </div>
  );
}

export default NavigationBar;
