import { SectionTitle } from "@/components/invitation";
import { RsvpModal } from "../components";

export const PartySection = ({ countdown, rsvpOpen, onOpenRsvp, onCloseRsvp, onOpenMap }) => {
  return (
    <section className="px-6 py-14 md:px-10">
      <SectionTitle>Tiệc Cưới</SectionTitle>

      <RsvpModal isOpen={rsvpOpen} onClose={onCloseRsvp} />

      <div className="mb-8 rounded-3xl border border-[#710001]/10 bg-white/90 p-8 shadow-lg">
        <div className="mb-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8f5757]">Tiệc cưới diễn ra vào lúc</p>
          <p className="mb-3 text-5xl font-bold text-[#710001] md:text-6xl">17:30</p>
          <p className="text-xl font-semibold text-[#710001]">Thứ Tư, ngày 20 tháng 05 năm 2026</p>
          <p className="text-sm text-[#7b3d3d]">(Tức ngày 04/04 năm Bính Ngọ)</p>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4 rounded-2xl bg-[#fff0e7] p-5 text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8f5757]">Đón khách</p>
            <p className="mt-2 text-3xl font-bold text-[#710001]">17:00</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8f5757]">Khai tiệc</p>
            <p className="mt-2 text-3xl font-bold text-[#710001]">18:30</p>
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-[#d7a7a7]/30 bg-gradient-to-r from-[#fff0e7] to-[#ffe6db] p-5 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8f5757]">⏳ Cùng đếm ngược</p>
          <p className="mt-2 text-xl font-bold tracking-wide text-[#710001] md:text-2xl">
            {countdown.days} ngày {countdown.hours} giờ {countdown.minutes} phút {countdown.seconds} giây
          </p>
        </div>

        <button
          onClick={onOpenRsvp}
          className="w-full rounded-full bg-[#710001] py-3.5 text-lg font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-[#8b2a2a] active:scale-95"
        >
          ✨ Xác nhận tham dự ✨
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[#710001]/10 bg-white shadow-md">
        <div className="border-b border-[#710001]/10 p-5 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8f5757]">📍 Địa điểm tổ chức</p>
          <p className="mt-1 font-medium text-[#710001]">Nhà hàng Tiệc cưới ...</p>
        </div>
        <iframe
          title="Wedding Map"
          className="h-[280px] w-full"
          src="https://www.google.com/maps?q=Kp%20Khang%20Thai,%20Quang%20Tho,%20Sam%20Son,%20Thanh%20Hoa&z=15&output=embed"
          loading="lazy"
          allowFullScreen
        />
        <div className="p-4 text-center">
          <button
            onClick={onOpenMap}
            className="inline-flex items-center gap-2 rounded-full bg-[#710001] px-6 py-2 text-white transition hover:bg-[#5e0000]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Xem đường đi (Google Maps)
          </button>
        </div>
      </div>
    </section>
  );
};
