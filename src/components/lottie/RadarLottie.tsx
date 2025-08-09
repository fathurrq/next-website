"use client"
import dynamic from "next/dynamic";

// Dynamically import to avoid SSR issues
const LottiePlayer = dynamic(() => import("@lottiefiles/react-lottie-player").then(m => m.Player), { ssr: false });

export default function RadarLottie() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-[300px]">
      <LottiePlayer
        autoplay
        loop
        src="/fv_assets.lottie" // place file in public folder
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
}