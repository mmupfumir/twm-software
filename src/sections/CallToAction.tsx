'use client';
import { Button } from "../components/Button";
import starsBg from "../assets/stars.png";
import gridLines from "../assets/grid-lines.png";
import { MdNorthEast } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })


  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section id="CallToAction" className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          animate={{ backgroundPositionX: starsBg.width }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(0,0,70)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto font-medium text-center tracking-tighter px-2">
              Learn to Earn.
            </h2>
            <p className="text-center md:text-xl max-w-xs mx-auto text-lg text-white/70 px-4 mt-5 tracking-tight">
              Profit from Knowledge. Learn, Trade, Succeed.
            </p>
            <div className="flex justify-center mt-8">
              <a href="https://t.me/tradingwithmat" target="_blank" rel="noopener noreferrer">
                <Button>
                  <span className="flex items-center gap-1">
                    Join Mentorship
                    <MdNorthEast />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
