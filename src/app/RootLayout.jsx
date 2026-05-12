import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import musicFile from "@/assets/I Do.mp3";

export function RootLayout() {
  const location = useLocation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicButton, setShowMusicButton] = useState(false);

  useEffect(() => {
    const audio = new Audio(musicFile);
    audioRef.current = audio;
    audio.loop = true;

    const syncPlayingState = () => setIsPlaying(!audio.paused);
    audio.addEventListener("play", syncPlayingState);
    audio.addEventListener("pause", syncPlayingState);
    audio.addEventListener("ended", syncPlayingState);

    return () => {
      audio.pause();
      audio.removeEventListener("play", syncPlayingState);
      audio.removeEventListener("pause", syncPlayingState);
      audio.removeEventListener("ended", syncPlayingState);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const shouldAutoplay = sessionStorage.getItem("wedding-music-autoplay") === "true";
    const shouldShowButton =
      shouldAutoplay || location.pathname === "/invitation" || sessionStorage.getItem("wedding-music-visible") === "true";

    if (!shouldShowButton) return;

    setShowMusicButton(true);
    sessionStorage.setItem("wedding-music-visible", "true");

    if (!shouldAutoplay) return;

    const audio = audioRef.current;
    if (!audio) return;

    sessionStorage.removeItem("wedding-music-autoplay");
    audio.play().catch(() => {
      setIsPlaying(false);
    });
  }, [location.pathname]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setShowMusicButton(true);
    sessionStorage.setItem("wedding-music-visible", "true");

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
  };

  return (
    <>
      <Outlet />
      {showMusicButton && (
        <button
          type="button"
          onClick={toggleMusic}
          data-autoscroll-ignore="true"
          aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
          className="fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-[#fff0e7]/70 bg-[#710001] text-[#fff0e7] shadow-[0_14px_30px_rgba(113,0,1,0.35)] transition hover:scale-105 active:scale-95 md:bottom-8 md:right-8 md:h-16 md:w-16"
        >
          <span className={`text-2xl ${isPlaying ? "animate-spin [animation-duration:3s]" : ""}`}>
            ♪
          </span>
        </button>
      )}
    </>
  );
}
