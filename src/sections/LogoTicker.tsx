"use client";
import US30 from "@/assets/us30.png";
import NASDAQ from "@/assets/nasdaq.png";
import GOLD from "@/assets/gold.png";
import BITCOIN from "@/assets/bitcoin.png";
import EUROUSD from "@/assets/eurousd.png";
import { motion } from "framer-motion";


export const LogoTicker = () => {
  return <section className="py-20 md:py-24">
    <div className="container">
      <div className="flex items-center gap-5">
        <div className="flex-1 md:flex-none font-thin text-white/50 shadow-slate-50">
          <h2 className="font-serif italic">Student Favorites</h2>
        </div>
        <div className=" flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
        initial={{ x: "-50%" }}
        animate={{ x: "0" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-none gap-14 pr-14 -translate-x-1/2"
        >
          {[US30, NASDAQ, GOLD, BITCOIN, EUROUSD, US30, NASDAQ, GOLD, BITCOIN, EUROUSD].map((logo, index) => (
            // eslint-disable-next-line react/jsx-key, @next/next/no-img-element
            <img src={logo.src} alt="logo" className="h-6 w-auto" key={index} />
          ))}
        </motion.div>
        </div>
      </div>
    </div>
  </section>;
};
