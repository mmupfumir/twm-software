"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“Your patience and expertise has helped me study the markets like a pro! Thank you for all that you do.”",
    name: "Sihle Mkhize",
    title: "Mentorship & Course Student | Funded",
  },
  {
    text: "“I have been backtesting your lessons for the past week and I must say that this course is class.”",
    name: "Jamie Lee",
    title: "Course Student",
  },
  {
    text: "“You taught me how to read the markets and get more precise entries, rather than look for patterns and fvg.”",
    name: "Amanda Smith",
    title: "Course Student",
  },
  {
    text: "“I see my entire financial situation changing and it's all because I came across one Tiktok”",
    name: "Michael Scott",
    title: "Mentorship Student | Funded",
  },
  {
    text: "“I can't express how appreciative I am. Being able to learn the how to properly look at the charts is an invaluable skill”",
    name: "Mahir Singh",
    title: "Mentorship Student",
  },
  {
    text: "“I am happy with how much I have learned. Thank you for not rushing me it finish the lessons, you're the best”",
    name: "Aiden Whyte",
    title: "Mentorship & Course Student",
  },
];

export const Testimonials = () => {
  return (
    <section id="Testimonials" className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Beyond Expectations.</h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl tracking-tight text-center mt-5">
          From small account owners to funded investors, our strategy has
          revolutionized the way traders approach the markets.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: "0" }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="flex gap-5 flex-none">
            {[...testimonials, ...testimonials].map(testimonial => (
              <div key={testimonial.name} className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(0,0,100,.5),black)] max-w-xs md:max-w-md flex-none">
                <div className="text-lg tracking-tight md:text-2xl">{testimonial.text}</div>
                <div className="flex flex-col mt-5">
                  <div>{testimonial.name}</div>
                  <div className="text-white/50 text-sm ">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
