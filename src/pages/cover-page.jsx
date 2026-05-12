import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import chuHyImage from "@/assets/CHU HY.webp";
import flowerImage from "@/assets/HOA.webp";
import phoenixImage from "@/assets/Phuong.webp";

import {
  InvitationBackground,
  InvitationFrame,
  InvitationGlobalStyles,
} from "@/components/invitation";

export const CoverPage = () => {
  const navigate = useNavigate();
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (!isOpening) return undefined;

    const timer = setTimeout(() => {
      navigate("/invitation");
    }, 1400);

    return () => clearTimeout(timer);
  }, [isOpening, navigate]);

  return (
    <InvitationBackground>
      <div className="px-2 py-2 md:px-4 md:py-10">

        <InvitationFrame className="max-w-5xl overflow-hidden border border-[#b77474]/30 bg-[#fff0e7] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">

          {/* nền */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(113,0,1,0.06),_transparent_38%)]" />

          <div className="relative overflow-hidden px-4 pb-14 pt-8 text-center md:px-10 md:pb-24 md:pt-16">

            {/* hoa góc */}
            <img
              src={flowerImage}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 top-0 w-[120px] opacity-40 md:w-[220px]"
            />

            <img
              src={flowerImage}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-6 bottom-0 w-[120px] scale-x-[-1] opacity-40 md:w-[220px]"
            />

            {/* chim trái */}
            <img
              src={phoenixImage}
              alt=""
              aria-hidden="true"
              className={`pointer-events-none absolute
                -left-10 top-[8px]
                w-[170px]
                opacity-95
                transition-all duration-[1400ms] ease-out

                md:-left-24 md:top-[20px]
                md:w-[380px]

                ${
                  isOpening
                    ? "-translate-x-12 -translate-y-[280px] rotate-[-24deg] scale-[0.72] opacity-0"
                    : "translate-x-0 translate-y-0 rotate-0"
                }
              `}
            />

            {/* chim phải */}
            <img
              src={phoenixImage}
              alt=""
              aria-hidden="true"
              className={`pointer-events-none absolute
                -right-10 bottom-[10px]
                w-[170px]
                scale-x-[-1]
                opacity-95
                transition-all duration-[1400ms] ease-out

                md:-right-24 md:bottom-[10px]
                md:w-[380px]

                ${
                  isOpening
                    ? "translate-x-12 translate-y-[280px] rotate-[24deg] scale-[0.72] opacity-0"
                    : "translate-x-0 translate-y-0 rotate-0"
                }
              `}
            />

            {/* con dấu chữ hỷ */}
            <div className="relative z-30 flex justify-center">
              <div
                className="
                  relative flex items-center justify-center
                  h-[56px] w-[56px]
                  rounded-full
                  animate-softPulse

                  md:h-[82px]
                  md:w-[82px]
                "
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #710001, rgb(83, 0, 0))",
                  boxShadow:
                    "0 4px 20px rgba(113, 0, 1, 0.5), inset 0 2px 4px rgba(255,255,255,0.3)",
                }}
              >
                <div className="absolute inset-0 rounded-full bg-white/5" />

                <div
                  className="h-8 w-8 opacity-90 md:h-12 md:w-12"
                  style={{
                    backgroundColor: "#FFF0E7",

                    WebkitMaskImage: `url(${chuHyImage})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",

                    maskImage: `url(${chuHyImage})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                />
              </div>
            </div>

            {/* tên */}
            <div
              className={`relative z-10 mt-10 transition-all duration-700 ${
                isOpening
                  ? "translate-y-4 opacity-70"
                  : "translate-y-0 opacity-100"
              }`}
              style={{ fontFamily: '"Times New Roman", serif' }}
            >
              <div className="text-[26px] leading-[1.45] text-[#8b0000] md:text-[64px]">

                <div>Anh Tuấn</div>

                <div className="text-[18px] leading-none md:text-[28px]">
                  &
                </div>

                <div>Ngọc Nhi</div>
              </div>
            </div>

            {/* divider */}
            <div className="relative z-10 mt-4 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[#710001]/20 md:w-16" />

              <span className="text-[#b77474] text-sm md:text-lg">
                ❦
              </span>

              <div className="h-px w-10 bg-[#710001]/20 md:w-16" />
            </div>

            {/* ngày */}
            <p className="relative z-10 mt-5 text-[15px] text-[#8b0000] md:text-3xl">
              20 tháng 5, 2026
            </p>

            {/* thân mời */}
            <p className="relative z-10 mt-6 text-[14px] tracking-[0.08em] text-[#9b4a4a] md:text-2xl">
              Thân Mời
            </p>

            {/* button */}
            <button
              type="button"
              onClick={() => setIsOpening(true)}
              disabled={isOpening}
              className="
                group relative z-10 mt-8
                inline-flex items-center justify-center
                overflow-hidden
                rounded-full
                bg-[#8b0000]
                px-9 py-3
                text-lg font-semibold
                text-[#fff0e7]

                shadow-[0_10px_25px_rgba(113,0,1,0.35)]

                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#710001]

                disabled:cursor-not-allowed
                disabled:opacity-90

                md:px-14 md:py-4 md:text-2xl
              "
            >
              <span className="relative z-10">
                {isOpening ? "Đang mở..." : "Mở thiệp"}
              </span>

              <span className="absolute inset-y-0 left-[-30%] w-12 rotate-12 bg-white/25 blur-sm transition-all duration-700 group-hover:left-[120%]" />
            </button>

          </div>
        </InvitationFrame>
      </div>

      <InvitationGlobalStyles />
    </InvitationBackground>
  );
};