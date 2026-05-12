import { SectionTitle } from "@/components/invitation";
import phoenixImage from "@/assets/Phuong.webp";
import flowerImage from "@/assets/HOA.webp";
import { familyCards } from "../data";

const FamilyColumn = ({ side, parents, address }) => {
  return (
    <div className="text-center">
      <p className="text-[20px] text-[#7a0000] md:text-[26px]">
        {side}
      </p>

      <div className="mt-3 space-y-2">
        {parents.map((parent) => (
          <p
            key={parent}
            className="
              text-[20px]
              font-semibold
              leading-relaxed
              text-[#7a0000]

              md:text-[30px]
            "
          >
            {parent}
          </p>
        ))}
      </div>

      <div className="mt-4 space-y-1">
        {address.map((line) => (
          <p
            key={line}
            className="
              text-[15px]
              text-[#8d5b5b]

              md:text-[18px]
            "
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export const FamilySection = () => {
  return (
    <section className="relative z-10 overflow-hidden px-5 pb-20 pt-14 md:px-10">

      {/* nền chim */}
      <img
        src={phoenixImage}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-24 bottom-20
          w-[260px]
          opacity-[0.08]

          md:-left-28
          md:bottom-0
          md:w-[520px]
        "
      />

      {/* hoa nền */}
      <img
        src={flowerImage}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-10 bottom-0
          w-[180px]
          opacity-10

          md:w-[280px]
        "
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* title */}
        <SectionTitle>
          THÔNG TIN LỄ CƯỚI
        </SectionTitle>

        {/* gia đình */}
        <div className="mt-10 grid grid-cols-[1fr_auto_1fr] items-start gap-5 md:gap-10">

          <FamilyColumn {...familyCards[0]} />

          {/* line giữa */}
          <div className="mt-3 h-[120px] w-px bg-[#b43b3b]/50 md:h-[170px]" />

          <FamilyColumn {...familyCards[1]} />
        </div>

        {/* text */}
        <div className="mt-14 space-y-3 text-[#7a0000]">

          <p className="text-[20px] leading-relaxed md:text-[34px]">
            TRÂN TRỌNG BÁO TIN
          </p>

          <p className="text-[20px] leading-relaxed md:text-[34px]">
            LỄ THÀNH HÔN CỦA CON CHÚNG TÔI
          </p>
        </div>

        {/* tên */}
        <div
          className="
            mt-14
            text-[#8b0000]
          "
          style={{ fontFamily: '"Times New Roman", serif' }}
        >
          <h2
            className="
              text-[44px]
              leading-none

              md:text-[78px]
            "
          >
            Lê Anh Tuấn
          </h2>

          <p
            className="
              mt-5
              text-[16px]
              tracking-[0.35em]

              md:text-[24px]
            "
          >
            TRƯỞNG NAM
          </p>

          <div
            className="
              my-8
              text-[42px]

              md:my-10
              md:text-[68px]
            "
          >
            &
          </div>

          <h2
            className="
              text-[44px]
              leading-none

              md:text-[78px]
            "
          >
            Trần Ngọc Nhi
          </h2>

          <p
            className="
              mt-5
              text-[16px]
              tracking-[0.35em]

              md:text-[24px]
            "
          >
            ÚT NỮ
          </p>
        </div>

        {/* lễ */}
        <div className="mt-16 text-[#7a0000]">

          <p className="text-[20px] leading-relaxed md:text-[34px]">
            LỄ THÀNH HÔN ĐƯỢC CỬ HÀNH TẠI
          </p>

          <p className="mt-2 text-[20px] md:text-[34px]">
            TƯ GIA
          </p>

          <p className="mt-10 text-[22px] md:text-[38px]">
            VÀO LÚC 09:00
          </p>
        </div>

        {/* ngày */}
        <div className="mt-12 flex items-center justify-center gap-3 text-[#8b0000]">

          <span className="text-[20px] md:text-[34px]">
            THỨ BẢY
          </span>

          <div className="h-8 w-px bg-[#c98d8d]" />

          <span className="text-[54px] leading-none md:text-[88px]">
            13
          </span>

          <div className="h-8 w-px bg-[#c98d8d]" />

          <span className="text-[20px] md:text-[34px]">
            THÁNG 06
          </span>
        </div>

        <p
          className="
            mt-8
            text-[36px]
            text-[#8b0000]

            md:text-[56px]
          "
        >
          2026
        </p>

        <p
          className="
            mt-4
            text-[14px]
            italic
            text-[#8d5b5b]

            md:text-[20px]
          "
        >
          (Tức ngày 28/04 năm Bính Ngọ)
        </p>
      </div>
    </section>
  );
};
