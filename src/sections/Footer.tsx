export const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="flex md:flex-row gap-10 md:items-center sm:flex-col md:justify-center">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <div className="border border-white/25 bg-[linear-gradient(to_bottom_left,rgb(50,50,50,.3),black)] h-10 w-10 rounded-lg inline-flex justify-center items-center">
                <h1>T</h1>
                <h1 className="text-amber-500 font-bold">|</h1>
                <h1>M</h1>
              </div>
            </div>
          </div>
            <nav className="flex flex-col md:flex-row gap-5">
              <a href="https://t.me/+tH9lcPdkbIA1MTA0" className="text-white/70 hover:text-white transition-hover duration-300 text-xs md:text-sm">Free Telegram</a>
              <a href="https://www.instagram.com/tradingwithmat/" className="text-white/70 hover:text-white transition-hover duration-300 text-xs md:text-sm">Instagram</a>
              <a href="https://www.youtube.com/@tradingwithmat" className="text-white/70 hover:text-white transition-hover duration-300 text-xs md:text-sm">Youtube</a>
              <a href="https://tiktok.com/@tradingwithmat" className="text-white/70 hover:text-white transition-hover duration-300 text-xs md:text-sm">Tiktok</a>
            </nav>
        </div>
      </div>
    </footer>
  );
};
