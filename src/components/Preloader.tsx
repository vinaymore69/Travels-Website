import { useEffect, useState } from "react";
import preloaderGif from "@/assets/preloader.gif";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Remove preloader after fade animation completes
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2s display + 0.5s fade

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500"
      style={{ opacity: fadeOut ? 0 : 1 }}
    >
      <img
        src={preloaderGif}
        alt="Loading..."
        className="w-44 h-44"
        style={{ imageRendering: "auto" }}
      />
    </div>
  );
};

export default Preloader;
