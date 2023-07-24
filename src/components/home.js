import React from "react";
import NavigationBar from "./navigationBar";
import Image from "next/image";
import PromotionalVideo from "../assets/promotional-video.webp";

function Home() {
  return (
    <div>
      <NavigationBar page="home" />

      <div className="relative h-[200px] md:h-[650px]">
        <Image
          src={PromotionalVideo}
          priority
          alt="promotional video"
          placeholder="blur"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Home;
