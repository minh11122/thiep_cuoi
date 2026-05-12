import { invitationFloatingSymbols } from "./invitation-floating-symbols";

export const InvitationBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#710001] via-[#5e0101] to-[#3a0000]">
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

      <div className="relative z-20">{children}</div>
    </div>
  );
};
