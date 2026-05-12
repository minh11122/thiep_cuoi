import { invitationFloatingSymbols } from "./invitation-floating-symbols";

const sparkles = [
  { left: "8%", top: "14%", size: "8px", delay: "0s" },
  { left: "18%", top: "52%", size: "6px", delay: "1.1s" },
  { left: "29%", top: "24%", size: "10px", delay: "2.4s" },
  { left: "76%", top: "16%", size: "8px", delay: "1.6s" },
  { left: "88%", top: "38%", size: "6px", delay: "0.8s" },
  { left: "66%", top: "62%", size: "9px", delay: "2.8s" },
];

export const InvitationBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#710001] via-[#5e0101] to-[#3a0000]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,240,231,0.16),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(255,214,194,0.12),_transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
      {invitationFloatingSymbols.map((item, index) => (
        <span
          key={index}
          className="pointer-events-none absolute bottom-[-50px] z-0 select-none text-[#ffd7c2] opacity-20"
          style={{
            left: item.left,
            fontSize: item.size,
            animation: `floatUp ${item.duration} ease-in-out ${item.delay} infinite`,
          }}
        >
          囍
        </span>
      ))}

      {sparkles.map((item, index) => (
        <span
          key={`sparkle-${index}`}
          className="animate-twinkle pointer-events-none absolute rounded-full bg-[#ffe7d7]/80 shadow-[0_0_18px_rgba(255,231,215,0.35)]"
          style={{
            left: item.left,
            top: item.top,
            width: item.size,
            height: item.size,
            animationDelay: item.delay,
          }}
        />
      ))}

      <div className="relative z-20">{children}</div>
    </div>
  );
};
