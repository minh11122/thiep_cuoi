import { useEffect, useMemo, useRef, useState } from "react";
import {
  InvitationBackground,
  InvitationFrame,
  InvitationGlobalStyles,
} from "@/components/invitation";
import { galleryImages } from "./data";
import { useCountdown } from "./hooks/use-countdown";
import {
  AlbumSection,
  FamilySection,
  GiftSection,
  GuestbookSection,
  HeroSection,
  InvitationFooter,
  PartySection,
  TimelineSection,
} from "./sections";

const weddingPartyDate = new Date(2026, 4, 20, 17, 30, 0);

export const HomePage = () => {
  const countdown = useCountdown(weddingPartyDate);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(null);
  const galleryScrollRef = useRef(null);
  const galleryPauseRef = useRef(false);
  const galleryLoopImages = useMemo(() => [...galleryImages, ...galleryImages], []);

  useEffect(() => {
    const container = galleryScrollRef.current;
    if (!container) return undefined;

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

  useEffect(() => {
    const shouldAutoScroll = sessionStorage.getItem("wedding-auto-scroll") === "true";
    if (!shouldAutoScroll) return undefined;

    sessionStorage.removeItem("wedding-auto-scroll");
    window.scrollTo({ top: 0, behavior: "auto" });

    let frameId;
    let startTime;
    let elapsedBeforePause = 0;
    const duration = 32000;
    let paused = false;
    let finished = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchMoved = false;
    let lastTouchToggleAt = 0;

    const getMaxScroll = () => Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
    const getProgressFromScroll = () => {
      const currentMaxScroll = getMaxScroll();
      if (currentMaxScroll <= 0) return 0;
      return Math.min(window.scrollY / currentMaxScroll, 1);
    };
    const isIgnoredTarget = (target) =>
      target instanceof Element &&
      Boolean(
        target.closest("button, a, input, textarea, select, label, iframe, [data-autoscroll-ignore]")
      );

    if (getMaxScroll() <= 0) return undefined;

    const stopAutoScroll = () => {
      if (paused || finished) return;
      paused = true;
      if (frameId) window.cancelAnimationFrame(frameId);
    };

    const resumeAutoScroll = () => {
      if (!paused || finished) return;
      elapsedBeforePause = getProgressFromScroll() * duration;
      paused = false;
      startTime = undefined;
      frameId = window.requestAnimationFrame(step);
    };

    const pauseAutoScroll = () => {
      if (paused || finished) return;
      if (startTime) {
        elapsedBeforePause += performance.now() - startTime;
        startTime = undefined;
      }
      stopAutoScroll();
    };

    const toggleAutoScroll = () => {
      if (finished) return;

      if (paused) {
        resumeAutoScroll();
        return;
      }

      pauseAutoScroll();
    };

    const step = (timestamp) => {
      if (paused || finished) return;
      if (!startTime) startTime = timestamp;
      const elapsed = elapsedBeforePause + (timestamp - startTime);
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, getMaxScroll() * progress);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      } else {
        finished = true;
      }
    };

    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchMoved = false;
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (!touch) return;

      const deltaX = Math.abs(touch.clientX - touchStartX);
      const deltaY = Math.abs(touch.clientY - touchStartY);

      if (deltaX > 12 || deltaY > 12) {
        touchMoved = true;
        pauseAutoScroll();
      }
    };

    const handleTouchEnd = (event) => {
      if (touchMoved) return;
      if (isIgnoredTarget(event.target)) return;
      lastTouchToggleAt = Date.now();
      toggleAutoScroll();
    };

    const handleClick = (event) => {
      if (Date.now() - lastTouchToggleAt < 500) return;
      if (isIgnoredTarget(event.target)) return;
      toggleAutoScroll();
    };

    window.addEventListener("wheel", pauseAutoScroll, { passive: true });
    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", pauseAutoScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    frameId = window.requestAnimationFrame(step);
    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("wheel", pauseAutoScroll);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", pauseAutoScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const handleOpenGallery = (index) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const handleOpenMap = () => {
    const address = "Kp Khang Thái, Quảng Thọ, Sầm Sơn, Thanh Hóa";
    const googleMapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(googleMapUrl, "_blank");
  };

  return (
    <InvitationBackground>
      <div className="relative px-4 py-8 md:py-12">
        <InvitationFrame className="max-w-6xl">
          <HeroSection />
          <FamilySection />
          <AlbumSection
            galleryImages={galleryImages}
            galleryLoopImages={galleryLoopImages}
            galleryOpen={galleryOpen}
            galleryIndex={galleryIndex}
            galleryScrollRef={galleryScrollRef}
            galleryPauseRef={galleryPauseRef}
            onCloseGallery={() => setGalleryOpen(false)}
            onNextGallery={() => setGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
            onPrevGallery={() => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            onOpenGallery={handleOpenGallery}
          />
          <PartySection
            countdown={countdown}
            rsvpOpen={rsvpOpen}
            onOpenRsvp={() => setRsvpOpen(true)}
            onCloseRsvp={() => setRsvpOpen(false)}
            onOpenMap={handleOpenMap}
          />
          <TimelineSection />
          <GuestbookSection />
          <GiftSection
            qrOpen={qrOpen}
            onCloseQr={() => setQrOpen(null)}
            onOpenQr={setQrOpen}
          />
          <InvitationFooter />
        </InvitationFrame>
      </div>
      <InvitationGlobalStyles />
    </InvitationBackground>
  );
};
