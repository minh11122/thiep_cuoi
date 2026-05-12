import { RevealBlock, SectionTitle } from "@/components/invitation";
import flowerImage from "@/assets/HOA.webp";
import phoenixImage from "@/assets/Phuong.webp";
import { RsvpModal } from "../components";

export const PartySection = ({
  countdown,
  rsvpOpen,
  onOpenRsvp,
  onCloseRsvp,
}) => {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-10">

      <RsvpModal isOpen={rsvpOpen} onClose={onCloseRsvp} />

      {/* nền */}
      <img
        src={flowerImage}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-0 top-0
          w-[220px]
          opacity-[0.08]

          md:w-[340px]
        "
      />

      <img
        src={phoenixImage}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-20 top-[120px]
          w-[280px]
          opacity-[0.06]

          md:w-[500px]
        "
      />

      <RevealBlock className="relative z-10 mx-auto max-w-3xl text-center">

        <SectionTitle>
          TIỆC CƯỚI SẼ DIỄN RA VÀO LÚC:
        </SectionTitle>

        {/* giờ */}
        <p
          className="
            mt-10
            text-[34px]
            font-semibold
            text-[#8b0000]

            md:text-[58px]
          "
        >
          23:00
        </p>

        {/* ngày */}
        <div className="mt-7 flex items-center justify-center gap-3 text-[#8b0000]">

          <span className="text-[20px] md:text-[34px]">
            THỨ TƯ
          </span>

          <div className="h-8 w-px bg-[#c98d8d]" />

          <span className="text-[54px] leading-none md:text-[88px]">
            20
          </span>

          <div className="h-8 w-px bg-[#c98d8d]" />

          <span className="text-[20px] md:text-[34px]">
            THÁNG 05
          </span>
        </div>

        {/* âm lịch */}
        <p
          className="
            mt-8
            text-[15px]
            italic
            text-[#8d5b5b]

            md:text-[22px]
          "
        >
          (Tức ngày 04/04 năm Bính Ngọ)
        </p>

        {/* giờ đón khách */}
        <div className="mt-12 flex justify-center gap-14 md:gap-24">

          <div>
            <p
              className="
                text-[15px]
                tracking-[0.08em]
                text-[#8b0000]

                md:text-[22px]
              "
            >
              ĐÓN KHÁCH
            </p>

            <p
              className="
                mt-3
                text-[30px]
                font-semibold
                text-[#8b0000]

                md:text-[48px]
              "
            >
              09:00
            </p>
          </div>

          <div>
            <p
              className="
                text-[15px]
                tracking-[0.08em]
                text-[#8b0000]

                md:text-[22px]
              "
            >
              KHAI TIỆC
            </p>

            <p
              className="
                mt-3
                text-[30px]
                font-semibold
                text-[#8b0000]

                md:text-[48px]
              "
            >
              23:00
            </p>
          </div>
        </div>

        {/* countdown */}
        <div className="mt-16">

          <p
            className="
              text-[24px]
              text-[#8b0000]

              md:text-[42px]
            "
          >
            CÙNG ĐẾM NGƯỢC
          </p>

          <p
            className="
              mt-6
              text-[22px]
              font-semibold
              text-[#8b0000]

              md:text-[38px]
            "
          >
            {countdown.days} ngày {countdown.hours} giờ{" "}
            {countdown.minutes} phút {countdown.seconds} giây
          </p>
        </div>

        {/* calendar fake */}
        <div
          className="
            mx-auto mt-14
            overflow-hidden
            rounded-[18px]
            border border-[#cfa7a7]
            bg-[#fffaf5]

            max-w-[320px]
            md:max-w-[520px]
          "
        >
          {/* head */}
          <div className="border-b border-[#d8b2b2] py-5">
            <p
              className="
                text-[22px]
                font-semibold
                text-[#8b0000]

                md:text-[32px]
              "
            >
              Tháng 5 / 2026
            </p>
          </div>

          {/* thứ */}
          <div className="grid grid-cols-7 border-b border-[#d8b2b2] py-3 text-[#9b4a4a]">
            {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* lịch */}
          <div className="grid grid-cols-7 gap-y-6 px-4 py-6 text-[#8b0000]">

            {Array.from({ length: 31 }, (_, i) => {
              const day = i + 1;

              return (
                <div
                  key={day}
                  className="
                    flex items-center justify-center
                    text-[18px]

                    md:text-[24px]
                  "
                >
                  {day === 20 ? (
                    <div
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-full
                        bg-[#8b0000]
                        text-white
                        shadow-lg

                        md:h-14 md:w-14
                      "
                    >
                      {day}
                    </div>
                  ) : (
                    day
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* add calendar */}
        <button
          className="
            mt-10
            border-b border-[#8b0000]
            text-[20px]
            text-[#8b0000]

            md:text-[30px]
          "
        >
          Thêm vào lịch
        </button>

        {/* button */}
        <button
          onClick={onOpenRsvp}
          className="
            mt-12
            rounded-full
            bg-[#8b0000]
            px-10 py-4

            text-[22px]
            font-bold
            text-white

            shadow-[0_10px_30px_rgba(113,0,1,0.3)]

            transition-all duration-300
            hover:scale-[1.03]
            hover:bg-[#710001]

            md:px-16
            md:py-5
            md:text-[34px]
          "
        >
          XÁC NHẬN THAM DỰ
        </button>
      </RevealBlock>
    </section>
  );
};
