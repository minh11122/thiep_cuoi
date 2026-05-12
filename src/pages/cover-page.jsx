import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import chuHyImage from "@/assets/CHU HY.webp";
import flowerImage from "@/assets/HOA.webp";
import paperBackground from "@/assets/NENGIAY.jpg";
import phoenixLeftImage from "@/assets/Phuong 2.webp";
import phoenixRightImage from "@/assets/Phuong.webp";

export const CoverPage = () => {
  const navigate = useNavigate();
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (!isOpening) return;

    const timer = setTimeout(() => {
      navigate("/invitation");
    }, 1400);

    return () => clearTimeout(timer);
  }, [isOpening, navigate]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#710001] via-[#5f0000] to-[#460000] px-4 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,240,231,0.08),_transparent_45%)]" />

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-[#d7a7a7]/40 bg-[#fff0e7] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("${paperBackground}")`,
            backgroundPosition: "center top",
            backgroundRepeat: "repeat-y",
            backgroundSize: "100%",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(113,0,1,0.08),_transparent_38%),radial-gradient(circle_at_bottom,_rgba(113,0,1,0.06),_transparent_30%)]" />

        <div className="relative overflow-hidden px-6 pb-16 pt-28 text-center md:px-10 md:pb-24 md:pt-24">
          <div className="pointer-events-none absolute inset-0">
            <img
              src={flowerImage}
              alt=""
              aria-hidden="true"
              className={`absolute -right-3 top-8 w-28 opacity-70 transition-all duration-1000 md:w-40 ${
                isOpening ? "translate-y-6 rotate-12 opacity-40" : "translate-y-0"
              }`}
            />
            <img
              src={flowerImage}
              alt=""
              aria-hidden="true"
              className={`absolute -left-4 bottom-8 w-32 scale-x-[-1] opacity-55 transition-all duration-1000 md:w-44 ${
                isOpening ? "-translate-y-6 -rotate-12 opacity-35" : "translate-y-0"
              }`}
            />
          </div>

          <img
            src={phoenixLeftImage}
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute -left-16 top-[86px] hidden w-[185px] opacity-95 transition-all duration-[1400ms] ease-out md:block md:w-[300px] ${
              isOpening
                ? "-translate-x-12 -translate-y-[280px] rotate-[-24deg] scale-[0.72] opacity-0"
                : "translate-x-0 translate-y-0 rotate-0"
            }`}
          />

          <img
            src={phoenixRightImage}
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute -right-16 top-[52px] hidden w-[185px] scale-x-[-1] opacity-95 transition-all duration-[1400ms] ease-out md:block md:w-[300px] ${
              isOpening
                ? "translate-x-12 -translate-y-[280px] rotate-[24deg] scale-[0.72] opacity-0"
                : "translate-x-0 translate-y-0 rotate-0"
            }`}
          />

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#fff0e7] bg-[#710001] shadow-xl md:h-20 md:w-20">
            <img src={chuHyImage} alt="Chu Hy" className="h-9 w-9 object-contain md:h-11 md:w-11" />
          </div>

          <div
            className={`relative z-10 mb-5 space-y-1 text-[42px] leading-none text-[#710001] transition-all duration-700 md:text-[64px] ${
              isOpening ? "translate-y-4 opacity-70" : "translate-y-0 opacity-100"
            }`}
            style={{ fontFamily: '"Times New Roman", serif' }}
          >
            <div>Anh Tuan</div>
            <div className="text-2xl md:text-3xl">&amp;</div>
            <div>Ngoc Nhi</div>
          </div>

          <div className="relative z-10 mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#710001]/35" />
            <span className="text-lg text-[#710001]">❦</span>
            <div className="h-px w-12 bg-[#710001]/35" />
          </div>

          <p className="relative z-10 mb-2 text-lg text-[#710001] md:text-2xl">20 thang 5, 2026</p>
          <p className="relative z-10 mb-8 text-base text-[#8f5757] md:text-lg">Than moi</p>

          <button
            type="button"
            onClick={() => setIsOpening(true)}
            disabled={isOpening}
            className="group relative z-10 inline-flex overflow-hidden rounded-full bg-[#710001] px-8 py-3 text-base font-semibold text-[#fff0e7] shadow-[0_14px_30px_rgba(113,0,1,0.28)] transition hover:-translate-y-0.5 hover:bg-[#5e0000] disabled:cursor-not-allowed disabled:opacity-90 md:px-10 md:py-3.5 md:text-lg"
          >
            <span className="relative z-10">{isOpening ? "Dang mo thiep..." : "Mo thiep"}</span>
            <span className="absolute inset-y-0 left-[-30%] w-12 rotate-12 bg-white/25 blur-sm transition-all duration-700 group-hover:left-[115%]" />
          </button>

          <p className="relative z-10 mt-5 text-xs font-medium tracking-[0.28em] text-[#9b4a4a] md:text-sm">
            Nhan vao de mo loi moi
          </p>
        </div>
      </div>
    </div>
  );
};
