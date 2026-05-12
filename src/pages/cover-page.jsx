import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

  const handleOpenInvitation = () => {
    sessionStorage.setItem("wedding-music-autoplay", "true");
    sessionStorage.setItem("wedding-music-visible", "true");
    setIsOpening(true);
  };

  useEffect(() => {
    if (!isOpening) return undefined;

    const timer = setTimeout(() => {
      navigate("/invitation");
    }, 1800);

    return () => clearTimeout(timer);
  }, [isOpening, navigate]);

  // Animation float cho chim
  const floatAnimation = {
    y: [0, -10, 0],
    rotate: [0, 3, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const floatAnimationRight = {
    y: [0, -10, 0],
    rotate: [0, -3, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <InvitationBackground>
      <div className="px-2 pt-6 pb-10 md:px-4 md:pt-10 md:pb-14">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 40,
          }}
          animate={{
            opacity: isOpening ? 0 : 1,
            scale: isOpening ? 1.08 : 1,
            y: isOpening ? -40 : 0,
            filter: isOpening ? "blur(14px)" : "blur(0px)",
          }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <InvitationFrame className="max-w-5xl overflow-hidden border border-[#b77474]/30 bg-[#fff0e7] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(113,0,1,0.08),_transparent_38%)]" />

            <div className="relative overflow-hidden px-4 pb-14 pt-10 text-center md:px-10 md:pb-24 md:pt-16">
              {/* hoa */}
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

              {/* chim trái - thêm animation float */}
              <motion.img
                src={phoenixImage}
                alt=""
                initial={{
                  opacity: 0,
                  x: -120,
                  rotate: -18,
                }}
                animate={{
                  opacity: isOpening ? 0 : 1,
                  x: isOpening ? -280 : 0,
                  y: isOpening ? -260 : 0,
                  rotate: isOpening ? -28 : 0,
                  scale: isOpening ? 0.72 : 1,
                  ...(!isOpening && floatAnimation),
                }}
                transition={{
                  duration: 1.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  pointer-events-none absolute
                  -left-10 top-[8px]
                  w-[170px]

                  md:-left-24 md:top-[20px]
                  md:w-[380px]
                "
              />

              {/* chim phải - thêm animation float */}
              <motion.img
                src={phoenixImage}
                alt=""
                initial={{
                  opacity: 0,
                  x: 120,
                  rotate: 18,
                }}
                animate={{
                  opacity: isOpening ? 0 : 1,
                  x: isOpening ? 280 : 0,
                  y: isOpening ? 260 : 0,
                  rotate: isOpening ? 28 : 0,
                  scale: isOpening ? 0.72 : 1,
                  ...(!isOpening && floatAnimationRight),
                }}
                transition={{
                  duration: 1.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  pointer-events-none absolute
                  -right-10 bottom-[10px]
                  w-[170px]
                  scale-x-[-1]

                  md:-right-24 md:bottom-[10px]
                  md:w-[380px]
                "
              />

              {/* con dấu */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{
                  opacity: 1,
                  scale: isOpening ? 1.8 : 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  type: "spring",
                }}
                className="relative z-30 flex justify-center"
              >
                <div
                  className="
                    relative flex items-center justify-center
                    h-[58px] w-[58px]
                    rounded-full

                    md:h-[82px]
                    md:w-[82px]

                    animate-softPulse
                  "
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, #710001, rgb(83, 0, 0))",
                    boxShadow:
                      "0 4px 22px rgba(113, 0, 1, 0.55), inset 0 2px 4px rgba(255,255,255,0.35)",
                  }}
                >
                  <div
                    className="h-8 w-8 opacity-95 md:h-12 md:w-12"
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
              </motion.div>

              {/* tên */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: isOpening ? 0 : 1,
                  y: isOpening ? 40 : 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.4,
                }}
                className="relative z-10 mt-10"
                style={{ fontFamily: '"Times New Roman", serif' }}
              >
                <div className="text-[28px] leading-[1.45] text-[#8b0000] md:text-[64px]">
                  <motion.div
                    initial={{ opacity: 0, letterSpacing: "0.4em" }}
                    animate={{ opacity: 1, letterSpacing: "0.06em" }}
                    transition={{ delay: 0.7, duration: 1 }}
                  >
                    Anh Tuấn
                  </motion.div>

                  <div className="text-[18px] leading-none md:text-[28px]">&</div>

                  <motion.div
                    initial={{ opacity: 0, letterSpacing: "0.4em" }}
                    animate={{ opacity: 1, letterSpacing: "0.06em" }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    Ngọc Nhi
                  </motion.div>
                </div>
              </motion.div>

              {/* divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
                className="relative z-10 mt-5 flex items-center justify-center gap-3"
              >
                <div className="h-px w-10 bg-[#710001]/20 md:w-16" />
                <span className="text-sm text-[#b77474] md:text-lg">❦</span>
                <div className="h-px w-10 bg-[#710001]/20 md:w-16" />
              </motion.div>

              {/* ngày */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.2,
                  duration: 1,
                }}
                className="relative z-10 mt-5 text-[15px] text-[#8b0000] md:text-3xl"
              >
                20 tháng 5, 2026
              </motion.p>

              {/* thân mời */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 1.3,
                }}
                className="
                  relative z-10 mt-6
                  text-[14px]
                  tracking-[0.12em]
                  text-[#9b4a4a]

                  md:text-2xl
                "
              >
                Thân Mời
              </motion.p>

              {/* button */}
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                type="button"
                onClick={handleOpenInvitation}
                disabled={isOpening}
                className="
                  group relative z-10 mt-8
                  inline-flex items-center justify-center
                  overflow-hidden rounded-full
                  bg-[#8b0000]
                  px-9 py-3
                  text-lg font-semibold
                  text-[#fff0e7]

                  shadow-[0_10px_25px_rgba(113,0,1,0.35)]

                  md:px-14 md:py-4 md:text-2xl
                "
              >
                <span className="relative z-10">
                  {isOpening ? "Đang mở..." : "Mở thiệp"}
                </span>
                <span className="absolute inset-y-0 left-[-30%] w-12 rotate-12 bg-white/25 blur-sm transition-all duration-700 group-hover:left-[120%]" />
              </motion.button>
            </div>
          </InvitationFrame>
        </motion.div>
      </div>

      <InvitationGlobalStyles />
    </InvitationBackground>
  );
};
