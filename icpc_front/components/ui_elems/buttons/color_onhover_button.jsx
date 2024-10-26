// Button component in Next.js using Tailwind CSS
export default function CustomButton({ children }) {
    return (
      <button className="relative z-10 px-[2vw] py-[0.5vw] text-[1.4vw] font-semibold overflow-hidden group border-none">
        <span className="absolute inset-0 w-0 h-full bg-gradient-to-r from-[#f88383] to-[#f9f047] transition-all duration-500 ease-in-out rounded-[2vw] z-[-1] group-hover:w-full"></span>
        {children}
      </button>
    );
  }
  