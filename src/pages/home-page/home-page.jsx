import { useMemo, useState, useEffect, useRef } from "react";
import chuHyImage from "@/assets/CHU HY.webp";
import paperBackground from "@/assets/NENGIAY.jpg";
import phoenixLeftImage from "@/assets/Phuong 2.webp";
import phoenixLineImage from "@/assets/Phuong line.webp";
import phoenixRightImage from "@/assets/Phuong.webp";

const galleryImages = [
  "https://cdn.chungdoi.com/uploads/26780109-5896-4372-ac01-3fdb523255b6.webp",
  "https://cdn.chungdoi.com/uploads/46320d70-4b15-491d-94eb-5e951362fcc6.webp",
  "https://cdn.chungdoi.com/uploads/8b3f5877-b6d3-4b28-a2dc-15b509b40ae1.webp",
  "https://cdn.chungdoi.com/uploads/4ffa511c-53bc-4e8e-bb42-c40e0effd686.webp",
  "https://cdn.chungdoi.com/uploads/86a9e2b2-038d-4e83-a66f-705cca7be42e.webp",
];

const timeline = [
  { time: "15:00", title: "Nhà trai xuất phát đón dâu" },
  { time: "16:30", title: "Lễ vu quy & Chào bố mẹ" },
  { time: "17:30", title: "Đón khách & Chụp ảnh cùng gia đình" },
  { time: "18:30", title: "Khai tiệc & Lễ rót rượu" },
  { time: "19:00", title: "Chương trình văn nghệ & Giao lưu" },
  { time: "21:00", title: "Kết thúc tiệc & Tiễn khách" },
];

const familyCards = [
  {
    side: "Nhà trai",
    parentLabel: "Ông bà",
    parents: ["Lê Văn Lương", "Nguyễn Thị Lý"],
    address: ["Kp Khang Thái", "Quảng Thọ, Sầm Sơn, Thanh Hóa"],
  },
  {
    side: "Nhà gái",
    parentLabel: "Ông bà",
    parents: ["Trần Văn A", "Nguyễn Thị B"],
    address: ["Quảng Châu", "Thanh Hóa"],
  },
];

const bankAccounts = [
  {
    role: "Chú rể",
    name: "Lê Anh Tuấn",
    bank: "Vietcombank",
    account: "0123456789",
  },
  {
    role: "Cô dâu",
    name: "Trần Ngọc Nhi",
    bank: "Vietcombank",
    account: "0123456788",
  },
];

const floatingSymbols = [
  { left: "5%", delay: "0s", duration: "14s", size: "20px" },
  { left: "20%", delay: "1.2s", duration: "16s", size: "16px" },
  { left: "35%", delay: "0.5s", duration: "18s", size: "24px" },
  { left: "55%", delay: "2s", duration: "15s", size: "18px" },
  { left: "72%", delay: "0.9s", duration: "19s", size: "22px" },
  { left: "88%", delay: "2.5s", duration: "17s", size: "14px" },
];

// ========== MODAL GALLERY ==========
const GalleryModal = ({ isOpen, images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPrev, onNext, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-rose-200 transition text-3xl z-10"
        >
          ✕
        </button>

        <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl">
          <img
            src={images[currentIndex]}
            alt={`Wedding ${currentIndex + 1}`}
            className="w-full h-auto max-h-[85vh] object-contain"
          />

          <div className="absolute inset-0 flex items-center justify-between p-5 pointer-events-none">
            <button
              onClick={onPrev}
              className="pointer-events-auto p-3 rounded-full bg-white/90 hover:bg-white text-[#710001] transition-all hover:scale-110 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={onNext}
              className="pointer-events-auto p-3 rounded-full bg-white/90 hover:bg-white text-[#710001] transition-all hover:scale-110 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1.5 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

// ========== SECTION TITLE ==========
const SectionTitle = ({ eyebrow, children }) => (
  <div className="mb-12 text-center">
    <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#b86b6b] font-medium">
      {eyebrow || "Wedding Invitation"}
    </p>
    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.08em] text-[#710001]">
      {children}
    </h2>
    <div className="w-16 h-px bg-[#710001]/20 mx-auto mt-4"></div>
  </div>
);

// ========== DECORATIVE SHELL ==========
const DecorativeShell = ({ children }) => (
  <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[48px] border border-[#d7a7a7]/50 bg-[#fffaf5] shadow-2xl transition-all duration-500">
    <div className="absolute inset-0 bg-gradient-to-br from-[#fff5ed] via-[#fff0e7] to-[#ffe6db]" />
    <div
      className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
      style={{
        backgroundImage: `url("${paperBackground}")`,
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundSize: "300px",
      }}
    />
    <img
      src={phoenixLineImage}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute left-0 bottom-[200px] h-[600px] w-auto scale-x-[-1] opacity-5 md:opacity-10 md:block hidden"
    />
    <div className="relative z-10">{children}</div>
  </div>
);

// ========== MAIN INVITATION COMPONENT ==========
const MainInvitation = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(null);
  const galleryScrollRef = useRef(null);
  const galleryPauseRef = useRef(false);
  const galleryLoopImages = useMemo(() => [...galleryImages, ...galleryImages], []);

  useEffect(() => {
    const targetDate = new Date(2026, 4, 20, 17, 30, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (86400000)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (3600000)) / (1000 * 60)),
        seconds: Math.floor((diff % (60000)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll gallery
  useEffect(() => {
    const container = galleryScrollRef.current;
    if (!container) return;

    let frameId;
    const animate = () => {
      if (!galleryPauseRef.current) {
        container.scrollLeft += 0.8;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      frameId = window.requestAnimationFrame(animate);
    };
    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleOpenMap = () => {
    const address = "Kp Khang Thái, Quảng Thọ, Sầm Sơn, Thanh Hóa";
    const googleMapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(googleMapUrl, "_blank");
  };

  return (
    <div className="relative px-4 py-8 md:py-12">
      <DecorativeShell>
        {/* HERO SECTION */}
        <section className="relative px-6 pt-16 pb-8 text-center md:pt-24 md:pb-12">
          <div className="mx-auto max-w-2xl">
            <div className="serif-font text-5xl md:text-7xl font-bold text-[#710001] leading-tight">
              <div className="animate-slideDown">Lê Anh Tuấn</div>
              <div className="my-3 text-4xl md:text-5xl text-[#b36b5e] animate-pulse">&amp;</div>
              <div className="animate-slideUp">Trần Ngọc Nhi</div>
            </div>

            <div className="relative flex justify-center my-10">
              <div className="relative w-36 h-36 md:w-52 md:h-52 animate-softPulse">
                <img
                  src={chuHyImage}
                  alt="Double Happiness"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <p className="text-[#8b5a5a] text-sm md:text-base italic border-t border-[#d7a7a7]/40 pt-6 inline-block px-8">
              Trọng đại & hạnh phúc nhất đời
            </p>
          </div>

          <img
            src={phoenixRightImage}
            alt=""
            className="pointer-events-none absolute -left-10 top-[62px] hidden w-[190px] opacity-90 drop-shadow-[0_18px_32px_rgba(113,0,1,0.18)] md:block md:w-[300px] animate-floatLeft"
          />
          <img
            src={phoenixRightImage}
            alt=""
            className="pointer-events-none absolute -right-10 top-[62px] hidden w-[190px] opacity-90 drop-shadow-[0_18px_32px_rgba(113,0,1,0.18)] md:block md:w-[300px] animate-floatRight"
          />
        </section>

        {/* FAMILY INFO + WEDDING CARD */}
        <section className="px-6 pb-12 md:px-10">
          <SectionTitle>Thông Tin Lễ Cưới</SectionTitle>
          <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.15fr_1fr]">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-[#710001]/10 hover:shadow-xl transition-all hover:-translate-y-2">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8f5757] font-bold">Nhà trai</p>
              <div className="w-12 h-px bg-[#710001]/20 mx-auto my-4"></div>
              <p className="text-sm text-[#a06666] mb-3">Ông bà</p>
              <p className="text-xl font-bold text-[#710001]">Lê Văn Lương</p>
              <p className="text-xl font-bold text-[#710001] mt-1">Nguyễn Thị Lý</p>
              <div className="mt-5 pt-4 border-t border-[#710001]/10">
                <p className="text-sm text-[#7b3d3d]">📍 Kp Khang Thái</p>
                <p className="text-sm text-[#7b3d3d]">Quảng Thọ, Sầm Sơn, Thanh Hóa</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-[#f6d9c9]/30 bg-gradient-to-br from-[#710001] via-[#8a1f1f] to-[#b14b38] p-8 text-center text-white shadow-[0_26px_70px_rgba(113,0,1,0.28)] transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_42%),radial-gradient(circle_at_bottom,_rgba(255,230,219,0.18),_transparent_36%)]" />
              <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.28em] text-[#f3d5c8]">Lễ thành hôn</p>
                <p className="text-xs uppercase mt-1 text-[#f5ddd2]">Thứ Bảy, 13 Tháng 06, 2026</p>
                <div className="my-6">
                  <span className="text-7xl md:text-8xl font-bold">09:00</span>
                </div>
                <p className="text-sm text-[#f3d5c8]/80">(Tức ngày 28/04 năm Bính Ngọ)</p>
                <div className="my-6 flex justify-center gap-3">
                  <div className="h-px w-12 bg-white/30" />
                  <span className="text-xl">❦</span>
                  <div className="h-px w-12 bg-white/30" />
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#f3d5c8]">Trân trọng kính mời</p>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-[#710001]/10 hover:shadow-xl transition-all hover:-translate-y-2">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8f5757] font-bold">Nhà gái</p>
              <div className="w-12 h-px bg-[#710001]/20 mx-auto my-4"></div>
              <p className="text-sm text-[#a06666] mb-3">Ông bà</p>
              <p className="text-xl font-bold text-[#710001]">Trần Văn A</p>
              <p className="text-xl font-bold text-[#710001] mt-1">Nguyễn Thị B</p>
              <div className="mt-5 pt-4 border-t border-[#710001]/10">
                <p className="text-sm text-[#7b3d3d]">📍 Quảng Châu</p>
                <p className="text-sm text-[#7b3d3d]">Thanh Hóa</p>
              </div>
            </div>
          </div>
        </section>

        {/* ALBUM SECTION */}
        <section className="bg-white/40 px-6 py-14 md:px-10 overflow-hidden">
          <SectionTitle>Album Ảnh Cưới</SectionTitle>
          
          <GalleryModal
            isOpen={galleryOpen}
            images={galleryImages}
            currentIndex={galleryIndex}
            onClose={() => setGalleryOpen(false)}
            onNext={() => setGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
            onPrev={() => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
          />
          
          <div className="relative group">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fff7f1] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fff7f1] to-transparent" />
            <div
              ref={galleryScrollRef}
              onMouseEnter={() => { galleryPauseRef.current = true; }}
              onMouseLeave={() => { galleryPauseRef.current = false; }}
              onTouchStart={() => { galleryPauseRef.current = true; }}
              onTouchEnd={() => { galleryPauseRef.current = false; }}
              className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {galleryLoopImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setGalleryIndex(index % galleryImages.length);
                    setGalleryOpen(true);
                  }}
                  className="group relative h-[320px] w-[240px] flex-shrink-0 overflow-hidden rounded-[28px] border border-white/70 shadow-[0_18px_40px_rgba(113,0,1,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(113,0,1,0.18)] md:h-[380px] md:w-[300px]"
                >
                  <img
                    src={image}
                    alt={`Wedding ${(index % galleryImages.length) + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#2f0606]/70 via-[#2f0606]/15 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/15 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-[#710001]/90 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                      Xem ảnh
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <p className="mt-5 text-center text-sm italic text-[#8f5757]">
            Album đang tự chuyển động ngang. Chạm hoặc rê chuột để tạm dừng.
          </p>

          <div className="text-center mt-8">
            <button 
              onClick={() => {
                setGalleryIndex(0);
                setGalleryOpen(true);
              }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#710001] text-[#710001] hover:bg-[#710001] hover:text-white transition-all"
            >
              <span>Xem tất cả ảnh</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* WEDDING PARTY + RSVP */}
        <section className="px-6 py-14 md:px-10">
          <SectionTitle>Tiệc Cưới</SectionTitle>

          {rsvpOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md animate-fadeIn"
              onClick={() => setRsvpOpen(false)}
            >
              <div
                className="w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl animate-scaleUp"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-[#8f5757] font-semibold">RSVP</p>
                    <h3 className="text-2xl font-bold text-[#710001] mt-1">Xác nhận tham dự</h3>
                  </div>
                  <button
                    onClick={() => setRsvpOpen(false)}
                    className="w-8 h-8 rounded-full border border-[#710001]/20 text-[#710001] hover:bg-[#fff0e7] transition"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-4">
                  <input className="w-full rounded-xl border border-[#710001]/20 bg-[#fffaf7] px-4 py-3 focus:border-[#710001] focus:ring-1 focus:ring-[#710001] outline-none transition" placeholder="Họ tên của bạn" />
                  <input className="w-full rounded-xl border border-[#710001]/20 bg-[#fffaf7] px-4 py-3 focus:border-[#710001] outline-none transition" placeholder="Số lượng khách" />
                  <textarea rows="3" className="w-full rounded-xl border border-[#710001]/20 bg-[#fffaf7] px-4 py-3 focus:border-[#710001] outline-none transition" placeholder="Lời nhắn đến cô dâu chú rể" />
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setRsvpOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-[#710001] text-white font-semibold hover:bg-[#5e0000] transition-all hover:scale-105"
                  >
                    Gửi xác nhận
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="rounded-3xl border border-[#710001]/10 bg-white/90 p-8 shadow-lg mb-8">
            <div className="text-center mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#8f5757] mb-3">Tiệc cưới diễn ra vào lúc</p>
              <p className="text-5xl md:text-6xl font-bold text-[#710001] mb-3">17:30</p>
              <p className="text-xl font-semibold text-[#710001]">Thứ Tư, ngày 20 tháng 05 năm 2026</p>
              <p className="text-sm text-[#7b3d3d]">(Tức ngày 04/04 năm Bính Ngọ)</p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-2xl bg-[#fff0e7] p-5 text-center mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8f5757]">Đón khách</p>
                <p className="mt-2 text-3xl font-bold text-[#710001]">17:00</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8f5757]">Khai tiệc</p>
                <p className="mt-2 text-3xl font-bold text-[#710001]">18:30</p>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-[#fff0e7] to-[#ffe6db] p-5 text-center mb-6 border border-[#d7a7a7]/30">
              <p className="text-sm uppercase tracking-[0.22em] text-[#8f5757] font-medium">⏳ Cùng đếm ngược</p>
              <p className="text-xl md:text-2xl font-mono font-bold text-[#710001] mt-2 tracking-wide">
                {countdown.days} ngày {countdown.hours} giờ {countdown.minutes} phút {countdown.seconds} giây
              </p>
            </div>

            <button
              onClick={() => setRsvpOpen(true)}
              className="w-full py-3.5 rounded-full bg-[#710001] text-white font-semibold text-lg transition-all hover:bg-[#8b2a2a] hover:scale-[1.02] active:scale-95 shadow-md"
            >
              ✨ Xác nhận tham dự ✨
            </button>
          </div>

          <div className="rounded-3xl border border-[#710001]/10 bg-white overflow-hidden shadow-md">
            <div className="p-5 text-center border-b border-[#710001]/10">
              <p className="text-sm uppercase tracking-[0.2em] text-[#8f5757] font-medium">📍 Địa điểm tổ chức</p>
              <p className="text-[#710001] mt-1 font-medium">Nhà hàng Tiệc cưới ...</p>
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
                onClick={handleOpenMap}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#710001] text-white hover:bg-[#5e0000] transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Xem đường đi (Google Maps)
              </button>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="px-6 py-14 md:px-10 bg-white/30">
          <SectionTitle>Lịch Trình Ngày Cưới</SectionTitle>
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#710001]/10 bg-white/80 p-6 shadow-md">
            {timeline.map((item, idx) => (
              <div key={item.time} className="group flex items-start gap-5 py-2">
                <div className="w-24 text-right font-bold text-[#710001] text-sm md:text-base">{item.time}</div>
                <div className="relative flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#710001] mt-2 ring-4 ring-[#f3d5c8] z-10"></div>
                  {idx < timeline.length - 1 && <div className="absolute top-6 w-0.5 h-16 bg-[#710001]/20"></div>}
                </div>
                <div className="flex-1 py-1 text-sm md:text-base text-[#710001] font-medium group-hover:translate-x-1 transition">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GUESTBOOK */}
        <section className="bg-white/40 px-6 py-14 md:px-10">
          <SectionTitle>Sổ Lưu Bút</SectionTitle>
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#710001]/10 bg-white/90 p-6 shadow-md">
            <div className="grid gap-4 md:grid-cols-2 mb-4">
              <input className="rounded-xl border border-[#710001]/20 bg-[#fffaf7] px-4 py-3 focus:border-[#710001] outline-none" placeholder="Tên của bạn" />
              <input className="rounded-xl border border-[#710001]/20 bg-[#fffaf7] px-4 py-3 focus:border-[#710001] outline-none" placeholder="Số điện thoại" />
            </div>
            <textarea rows="4" className="w-full rounded-xl border border-[#710001]/20 bg-[#fffaf7] px-4 py-3 focus:border-[#710001] outline-none" placeholder="Lời chúc phúc..." />
            <div className="mt-5 flex justify-end">
              <button className="px-7 py-2.5 rounded-full bg-[#710001] text-white font-semibold hover:bg-[#5e0000] transition-all hover:scale-105">
                Gửi lời chúc
              </button>
            </div>
          </div>
        </section>

        {/* HỢP MỪNG CƯỚI */}
        <section className="px-6 py-14 md:px-10">
          <SectionTitle>Hợp Mừng Cưới</SectionTitle>

          {qrOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fadeIn" onClick={() => setQrOpen(null)}>
              <div className="relative bg-white rounded-3xl p-8 animate-scaleUp" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setQrOpen(null)} className="absolute -top-3 -right-3 bg-white rounded-full w-8 h-8 shadow-md text-[#710001] hover:text-[#5e0000]">✕</button>
                <div className="flex flex-col items-center">
                  <div className="w-64 h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <div className="grid grid-cols-9 gap-1">
                      {Array.from({ length: 81 }).map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded ${Math.floor(i / 9) % 2 === 0 ? 'bg-[#710001]' : 'bg-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[#710001] font-medium">Mã QR - {qrOpen === 'groom' ? 'Chú rể' : 'Cô dâu'}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-2">
            {bankAccounts.map((item, idx) => (
              <div key={item.role} className="rounded-3xl border border-[#710001]/10 bg-white/80 p-7 text-center shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <p className="text-sm uppercase tracking-[0.25em] text-[#8f5757] font-semibold">{item.role}</p>
                <h3 className="text-2xl font-bold text-[#710001] mt-1 mb-5">{item.name}</h3>
                <button
                  onClick={() => setQrOpen(idx === 0 ? 'groom' : 'bride')}
                  className="mx-auto mb-5 w-40 h-40 rounded-2xl bg-gray-50 shadow-inner flex items-center justify-center transition hover:scale-105 hover:shadow-lg"
                >
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 49 }).map((_, i) => (
                      <div key={i} className={`w-3 h-3 rounded ${(i + item.name.length) % 3 === 0 ? 'bg-[#710001]' : 'bg-gray-300'}`} />
                    ))}
                  </div>
                </button>
                <p className="text-lg font-bold text-[#710001]">{item.bank}</p>
                <p className="text-sm text-[#7b3d3d] font-mono mb-5">{item.account}</p>
                <button
                  onClick={() => setQrOpen(idx === 0 ? 'groom' : 'bride')}
                  className="w-full py-2.5 rounded-full border-2 border-[#710001] text-[#710001] font-semibold hover:bg-[#710001] hover:text-white transition"
                >
                  Xem mã QR
                </button>
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-[#710001] px-6 py-8 text-center text-[#fff0e7]">
          <p className="text-sm md:text-base font-light">
            Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi.
          </p>
          <a href="https://chungdoi.com" target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs opacity-70 hover:opacity-100 transition">
            chungdoi.com
          </a>
        </footer>
      </DecorativeShell>
    </div>
  );
};

// ========== EXPORT HOMEPAGE ==========
export const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#710001] via-[#5e0101] to-[#3a0000]">
      {floatingSymbols.map((item, index) => (
        <span
          key={index}
          className="pointer-events-none absolute bottom-[-50px] z-0 text-[#ffd7c2] opacity-20 select-none"
          style={{
            left: item.left,
            fontSize: item.size,
            animation: `floatUp ${item.duration} ease-in-out ${item.delay} infinite`,
          }}
        >
          囍
        </span>
      ))}

      <div className="relative z-20">
        <MainInvitation />
      </div>

      <style>{`
        /* Hide scrollbar for all elements */
        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        *::-webkit-scrollbar {
          display: none;
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
        .serif-font { font-family: 'Cormorant Garamond', 'Times New Roman', serif; }
      `}</style>
    </div>
  );
};