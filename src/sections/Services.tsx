"use client";
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "@/assets/service.png";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";


const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "Free Content",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "Services and Pricing",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Course Overview",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (props: typeof tabs[number] & ComponentPropsWithoutRef <'div'> & { selected: boolean }) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(50);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current) return;
    const { height, width } = tabRef.current?.getBoundingClientRect() || { height: 0, width: 0 };
    const circumference = height * 2 + width * 2;

    const times = [0, width / circumference, (width + height) / circumference, (width * 2 + height) / circumference, 1];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop'
    }

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [xPercentage, yPercentage]);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      ref={tabRef}

      className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative"
      onMouseOver={handleTabHover}
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div style={{ maskImage, }} className="absolute inset-0 -m-px  rounded-xl border border-[#A369FF]"></motion.div>
      )}
      <div onMouseEnter={handleTabHover} className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer ref={dotLottieRef} src={props.icon} className="h-5 w-5" autoplay={false} />
      </div>
      <div>{props.title}</div>
    </div>
  );
};

export const Services = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);


  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);

    animate(backgroundSizeX, [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
    {
      duration: 2,
      ease: 'easeInOut',
    }
  );

    animate(backgroundPositionX, [backgroundPositionX.get(), tabs[index].backgroundPositionX],
    {
      duration: 2,
      ease: 'easeInOut',
    }
  );

    animate(backgroundPositionY, [backgroundPositionY.get(), tabs[index].backgroundPositionY],
    {
      duration: 2,
      ease: 'easeInOut',
    }
  );
};

  return (
    <section id="Services" className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your Strategy.
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl tracking-tight text-center mt-5">
          With content and support across the digital landscape, you can find value in what we do by any means possible.
        </p>
        <div className="mt-10 gap-2.5 flex flex-col lg:flex-row">
          {tabs.map((tab, tabindex) => (
            <FeatureTab {...tab}
            selected = {selectedTab === tabindex}
            onClick={() => handleSelectTab(tabindex)}
            key={tab.title} />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div className="aspect-video bg-cover border border-white/20 rounded-lg" style={{ backgroundPosition, backgroundSize, backgroundImage: `url(${productImage.src})` }} ></motion.div>
        </div>
      </div>
    </section>
  );
};
