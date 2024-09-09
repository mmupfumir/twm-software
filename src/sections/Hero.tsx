'use client';
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import { MdNorthEast } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import gridLines from "@/assets/grid-lines.png";

const pdfUrl = "/Course-Breakdown.pdf";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section id="Hero">
      <motion.div

        className="h-[580px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        animate={{ backgroundPositionX: starsBg.width}}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundPositionY,
          backgroundImage: `url(${starsBg.src})`
        }}
      >

        <div
            className="absolute inset-0 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(0,0,.10)_1%,rgb(0,0,80,0.5)_50%,transparent)]"></div>
        <div className="container relative mt-16">
          <h1 className="md:text-center text-8xl md:text-[155px] md:leading-none font-medium tracking-tighter">
          Trading with Mat
          </h1>
          <p className="sm:text-left md:text-center md:mx-auto text-lg md:text-xl text-white/70 mt-5 max-w-xl">
              Navigate the Forex Markets with Confidence: Learn to trade with a Strategic Plan for Winning Entries.
          </p>

          <div className="flex items-centers justify-center mt-5 gap-4">
            <a href="https://t.me/tradingwithmat" target="_blank" rel="noopener noreferrer">
              <Button>
                <span className="flex items-center gap-1">
                  Start Course
                  <IoIosArrowForward />
                </span>
              </Button>
            </a>
            <div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
