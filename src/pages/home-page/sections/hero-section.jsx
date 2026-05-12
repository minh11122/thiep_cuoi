import { motion } from "framer-motion";
import { RevealBlock } from "@/components/invitation";
import chuHyImage from "@/assets/CHU HY.webp";
import phoenixRightImage from "@/assets/Phuong.webp";

const heroPetals = [
  { left: "12%", top: "18%", delay: "0s" },
  { left: "26%", top: "36%", delay: "1.3s" },
  { left: "74%", top: "22%", delay: "0.8s" },
  { left: "88%", top: "40%", delay: "1.9s" },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-visible px-4 pb-16 pt-8 text-center md:min-h-screen md:px-6 md:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,245,237,0.55),_transparent_54%)] opacity-80" />
      {heroPetals.map((petal, index) => (
        <span
          key={index}
          className="animate-driftPetal pointer-events-none absolute h-3 w-3 rounded-full bg-[#f7d7cf]/75 blur-[1px]"
          style={{ left: petal.left, top: petal.top, animationDelay: petal.delay }}
        />
      ))}

      {/* Chữ hỷ */}
      <RevealBlock className="relative z-10 flex justify-center">
        <motion.img
          src={chuHyImage}
          alt=""
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="
            h-[82px]
            w-[82px]
            object-contain
            drop-shadow-[0_0_18px_rgba(139,0,0,0.18)]

            md:h-[160px]
            md:w-[160px]

            animate-softPulse
          "
        />
      </RevealBlock>

      {/* Chim trái */}
      <motion.img
        src={phoenixRightImage}
        alt=""
        initial={{ opacity: 0, x: -80, y: 40, rotate: -8 }}
        whileInView={{ opacity: 0.95, x: 0, y: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="
          pointer-events-none absolute z-30
          -left-14 top-[55px]
          w-[185px]
          opacity-95
          drop-shadow-xl

          md:-left-24 md:top-[160px]
          md:w-[430px]

          animate-floatLeft
        "
      />

      {/* Chim phải */}
      <motion.img
        src={phoenixRightImage}
        alt=""
        initial={{ opacity: 0, x: 80, y: 40, rotate: 8 }}
        whileInView={{ opacity: 0.95, x: 0, y: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="
          pointer-events-none absolute z-30
          -right-14 top-[55px]
          w-[185px]
          opacity-95
          drop-shadow-xl

          md:-right-24 md:top-[160px]
          md:w-[430px]

          animate-floatRight
        "
      />

      {/* Tên */}
      <RevealBlock className="relative z-10 mt-24 md:mt-14" delay={0.18}>
        <div className="serif-font text-[26px] leading-[1.45] tracking-[0.08em] text-[#8b0000] md:text-7xl">

          <div className="animate-slideDown bg-[linear-gradient(180deg,#9d1111,#6f0202)] bg-clip-text font-bold text-transparent drop-shadow-[0_10px_24px_rgba(113,0,1,0.16)]">
            ANH TUẤN
          </div>

          {/* trái tim */}
          <div className="my-1 text-[18px] text-[#c98d8d] animate-pulse drop-shadow-[0_0_12px_rgba(201,141,141,0.35)] md:my-3 md:text-5xl">
            ❤️
          </div>

          <div className="animate-slideUp bg-[linear-gradient(180deg,#9d1111,#6f0202)] bg-clip-text font-bold text-transparent drop-shadow-[0_10px_24px_rgba(113,0,1,0.16)]">
            NGỌC NHI
          </div>
        </div>
      </RevealBlock>
    </section>
  );
};
