import paperBackground from "@/assets/NENGIAY.jpg";
import phoenixLineImage from "@/assets/Phuong line.webp";

export const InvitationFrame = ({ children, className = "" }) => {
  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-[48px] border border-[#d7a7a7]/50 bg-[#fffaf5] shadow-2xl transition-all duration-500 ${className}`.trim()}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff5ed] via-[#fff0e7] to-[#ffe6db]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: `url("${paperBackground}")`,
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />
      <img
        src={phoenixLineImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[200px] left-0 hidden h-[600px] w-auto scale-x-[-1] opacity-5 md:block md:opacity-10"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
