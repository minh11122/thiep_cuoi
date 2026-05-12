export const InvitationGlobalStyles = () => {
  return (
    <style>{`
      * {
        scrollbar-width: none;
        -ms-overflow-style: none;
        font-family: "Times New Roman", Times, serif;
      }
      *::-webkit-scrollbar {
        display: none;
      }
      input, textarea, select, button {
        font: inherit;
      }

      @keyframes floatUp {
        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
        15% { opacity: 0.3; }
        100% { transform: translateY(-120vh) rotate(15deg); opacity: 0; }
      }
      @keyframes floatLeft {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-12px) rotate(-3deg); }
      }
      @keyframes floatRight {
        0%, 100% { transform: scaleX(-1) translateY(0) rotate(0deg); }
        50% { transform: scaleX(-1) translateY(-12px) rotate(3deg); }
      }
      @keyframes softPulse {
        0%, 100% { transform: scale(1); filter: drop-shadow(0 8px 20px rgba(0,0,0,0.15)); }
        50% { transform: scale(1.05); filter: drop-shadow(0 15px 30px rgba(113,0,1,0.25)); }
      }
      @keyframes slideDown {
        from { opacity: 0; transform: translateY(-30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes twinkle {
        0%, 100% { opacity: 0.15; transform: scale(0.9); }
        50% { opacity: 0.7; transform: scale(1.15); }
      }
      @keyframes driftPetal {
        0% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0; }
        15% { opacity: 0.7; }
        100% { transform: translate3d(40px, 120px, 0) rotate(18deg); opacity: 0; }
      }
      @keyframes scaleUp {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      .animate-slideDown { animation: slideDown 0.7s ease-out; }
      .animate-slideUp { animation: slideUp 0.7s ease-out; }
      .animate-softPulse { animation: softPulse 4s ease-in-out infinite; }
      .animate-floatLeft { animation: floatLeft 7s ease-in-out infinite; }
      .animate-floatRight { animation: floatRight 7s ease-in-out infinite; }
      .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
      .animate-scaleUp { animation: scaleUp 0.25s ease-out; }
      .animate-twinkle { animation: twinkle 3.2s ease-in-out infinite; }
      .animate-driftPetal { animation: driftPetal 7s ease-in-out infinite; }
      .serif-font { font-family: "Times New Roman", Times, serif; }

      
    `}</style>
  );
};
