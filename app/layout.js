import { Catamaran, Nova_Round, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../components/CartProvider";

import AosInit from "../components/AosInit";

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-catamaran",
});

const novaRound = Nova_Round({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nova-round",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Boldtron | Ecommerce",
  description: "Ecommerce Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${catamaran.variable} ${novaRound.variable} ${lato.variable}`}>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <AosInit />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
