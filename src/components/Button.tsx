export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative flex justify-center mx-auto py-4 px-5 rounded-full font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#0d0e5f] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_30px_#8c45ff] transiton-shadow duration-300">
      <div className="absolute inset-0">
        <div className="rounded-full border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]"></div>
        <div className="rounded-full border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(0,50,255,.7)_inset] rounded-full"></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};
