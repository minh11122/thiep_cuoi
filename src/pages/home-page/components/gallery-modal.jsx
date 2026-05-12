import { useEffect } from "react";

export const GalleryModal = ({ isOpen, images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl animate-scaleUp"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 text-3xl text-white transition hover:text-rose-200"
        >
          ×
        </button>

        <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
          <img
            src={images[currentIndex]}
            alt={`Wedding ${currentIndex + 1}`}
            className="max-h-[85vh] w-full object-contain"
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-5">
            <button
              onClick={onPrev}
              className="pointer-events-auto rounded-full bg-white/90 p-3 text-[#710001] shadow-lg transition-all hover:scale-110 hover:bg-white"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={onNext}
              className="pointer-events-auto rounded-full bg-white/90 p-3 text-[#710001] shadow-lg transition-all hover:scale-110 hover:bg-white"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-sm text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};
