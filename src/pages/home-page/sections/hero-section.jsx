import chuHyImage from "@/assets/CHU HY.webp";
import phoenixRightImage from "@/assets/Phuong.webp";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f3ec] px-4 pb-16 pt-8 text-center md:min-h-screen md:px-6 md:pt-16">

      {/* Chữ hỷ */}
      <div className="relative z-10 flex justify-center">
        <img
          src={chuHyImage}
          alt=""
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
      </div>

      {/* Chim trái */}
      <img
        src={phoenixRightImage}
        alt=""
        className="
          pointer-events-none absolute
          -left-14 top-[55px]
          w-[185px]
          opacity-95
          drop-shadow-xl

          md:-left-24 md:top-[60px]
          md:w-[430px]

          animate-floatLeft
        "
      />

      {/* Chim phải */}
      <img
        src={phoenixRightImage}
        alt=""
        className="
          pointer-events-none absolute
          -right-14 top-[55px]
          w-[185px]
          opacity-95
          drop-shadow-xl

          md:-right-24 md:top-[60px]
          md:w-[430px]

          animate-floatRight
        "
      />

      {/* Tên */}
      <div className="relative z-10 mt-24 md:mt-14">
        <div className="serif-font text-[26px] leading-[1.45] tracking-[0.08em] text-[#8b0000] md:text-7xl">

          <div className="animate-slideDown">
            ANH TUẤN
          </div>

          {/* trái tim */}
          <div className="my-1 text-[18px] text-[#c98d8d] animate-pulse md:my-3 md:text-5xl">
            ❤️
          </div>

          <div className="animate-slideUp">
            NGỌC NHI
          </div>
        </div>
      </div>
    </section>
  );
};