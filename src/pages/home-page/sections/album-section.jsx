import { RevealBlock, SectionTitle } from "@/components/invitation";
import { GalleryModal } from "../components";

export const AlbumSection = ({
  galleryImages,
  galleryLoopImages,
  galleryOpen,
  galleryIndex,
  galleryScrollRef,
  galleryPauseRef,
  onCloseGallery,
  onNextGallery,
  onPrevGallery,
  onOpenGallery,
}) => {
  return (
    <section className="overflow-hidden px-6 py-14 md:px-10">
      <SectionTitle>Album Ảnh Cưới</SectionTitle>

      <GalleryModal
        isOpen={galleryOpen}
        images={galleryImages}
        currentIndex={galleryIndex}
        onClose={onCloseGallery}
        onNext={onNextGallery}
        onPrev={onPrevGallery}
      />

      <RevealBlock className="group relative" delay={0.08}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fff7f1] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fff7f1] to-transparent" />
        <div
          ref={galleryScrollRef}
          onMouseEnter={() => {
            galleryPauseRef.current = true;
          }}
          onMouseLeave={() => {
            galleryPauseRef.current = false;
          }}
          onTouchStart={() => {
            galleryPauseRef.current = true;
          }}
          onTouchEnd={() => {
            galleryPauseRef.current = false;
          }}
          className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryLoopImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              onClick={() => onOpenGallery(index % galleryImages.length)}
              className="group relative h-[320px] w-[240px] flex-shrink-0 overflow-hidden rounded-[28px] border border-white/70 shadow-[0_18px_40px_rgba(113,0,1,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(113,0,1,0.18)] md:h-[380px] md:w-[300px]"
            >
              <img
                src={image}
                alt={`Wedding ${(index % galleryImages.length) + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
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
      </RevealBlock>

      <RevealBlock delay={0.12}>
      <p className="mt-5 text-center text-sm italic text-[#8f5757]">
        Album đang tự chuyển động ngang. Chạm hoặc rê chuột để tạm dừng.
      </p>
      </RevealBlock>

      <RevealBlock className="mt-8 text-center" delay={0.16}>
        <button
          onClick={() => onOpenGallery(0)}
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#710001] px-6 py-2 text-[#710001] transition-all hover:bg-[#710001] hover:text-white"
        >
          <span>Xem tất cả ảnh</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </RevealBlock>
    </section>
  );
};
