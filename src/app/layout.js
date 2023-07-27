import "./globals.css";
import {Inter} from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({subsets: ["latin"]});

const assistant = localFont({
  src: "../../public/fonts/Assistant-Regular.ttf",
  variable: "--font-assistant",
});

export const metadata = {
  title: "Pocket~Printsᵀᴹ",
  description: "Buy Pocket Printers from our official store !",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${assistant.variable}`}>
        {children}
      </body>
    </html>
  );
}
