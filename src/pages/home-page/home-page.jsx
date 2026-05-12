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
