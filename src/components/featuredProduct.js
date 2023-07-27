import Image from "next/image";
import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
// import {Rating} from "@mui/material";

import colorfulRoll from "../../public/assets/products/colorful-rolls/colorful-adhesive.webp";
import PP1R from "../../public/assets/products/Pocket Printer-1-roll/green.webp";
import PP3R from "../../public/assets/products/Pocket Printer-3-roll/pink.webp";
import whiteRolls from "../../public/assets/products/white-rolls/white-adhesive.webp";

const data = [
  {
    title: "Colorful Thermal Paper (3 rolls)",
    current_price: 22.99,
    previous_price: 45.99,
    rating: 5,
    people_rated: 19,
    thumbnail: colorfulRoll,
    slug: "colorful-thermal-paper-3-rolls",
  },
  {
    title: "Thermal Pocket Printer (With Free Thermal Paper - 1 Roll)",
    current_price: 49.99,
    previous_price: 99.99,
    rating: 5,
    people_rated: 25,
    thumbnail: PP1R,
    slug: "thermal-pocket-printer-with-free-thermalpaper-1-roll",
  },
  {
    title: "Thermal Pocket Printer (With Free Thermal Paper - 3 Rolls)",
    current_price: 119.99,
    previous_price: 59.99,
    rating: 5,
    people_rated: 28,
    thumbnail: PP3R,
    slug: "thermal-pocket-printer-with-free-thermal-paper-3-rolls",
  },
  {
    title: "White Thermal Paper (3 rolls)",
    current_price: 39.99,
    previous_price: 19.99,
    rating: 5,
    people_rated: 16,
    thumbnail: whiteRolls,
    slug: "white-thermal-paper-3-rolls",
  },
];

function FeaturedProduct() {
  return (
    <div className="md:my-10 py-5 px-5 md:px-20">
      <div>
        <p className=" font-bold font-assistant text-2xl md:text-3xl text-gray-800">
          Featured Products
        </p>
      </div>

      <div>
        <div className="flex flex-col md:flex-row py-5    ">
          {data.map((item, index) => (
            <Link key={index} href={item.slug}>
              <div className=" group p-2 mb-3 md:mr-3 md:border-none border-2 border-black w-[323px]">
                <div>
                  <Image
                    src={item.thumbnail}
                    alt="Printer with three rolls"
                    placeholder="blur"
                    objectFit="cover"
                    width={323}
                    height={323}
                    className=" grayscale-0 md:grayscale md:group-hover:scale-100 md:group-hover:grayscale-0 scale-90 transition-all ease-linear duration-50"
                  />
                </div>
                <div className="py-5">
                  <p className="font-assistant font-semibold md:group-hover:underline underline-offset-4">
                    {item.title}
                  </p>
                  <div className="flex">
                    <p>
                      {/* <Rating
                        name="half-rating-read"
                        defaultValue={item.rating}
                        precision={0.5}
                        readOnly
                      /> */}
                    </p>

                    <p>({item.people_rated})</p>
                  </div>
                  <div className="flex pt-1 items-center">
                    <p className="pr-1 text-sm text-center font-assistant">
                      <s>${item.previous_price}</s>
                    </p>
                    <p className="pl-1 font-assistant font-bold">
                      ${item.current_price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
