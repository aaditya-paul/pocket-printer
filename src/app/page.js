import Home from "@/components/home";
import Image from "next/image";
import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Index() {
  return (
    <>
      <Home />
    </>
  );
}
