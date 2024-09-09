import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-2 border-b border-white/5 sticky top-0 z-10">
      <div className="absolute inset-0 bg-black/30 backdrop-blur -z-10"></div>
      <div className="container flex items-center">
        <a href="#Hero" className="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-white/10 hover:border-white/20 bg-[linear-gradient(to_bottom_left,rgb(50,50,50,.3),black)]">
          <span className="text-xs">T</span>
          <span className="text-amber-500 font-bold">|</span>
          <span className="text-xs">M</span>
        </a>
        <nav className="flex text-right gap-8 sm:gap-4 text-xs ml-auto">
          <a href="#Services" className="text-white/25 hover:text-white transition-hover duration-300">
                Services
          </a>
          <a href="#Testimonials" className="text-white/25 hover:text-white transition-hover duration-300">
                Testimonials
          </a>
          <a href="#CallToAction" className="text-white/25 hover:text-white transition-hover duration-300">
                Mentorship
          </a>
        </nav>

      </div>
    </header>
  );
};
