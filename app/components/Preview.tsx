"use client";

import { useRef } from "react";

export default function Preview() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen(); // Safari
      } else if ((videoRef.current as any).msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen(); // IE/Edge
      }
    }
  };
  return (
    <section className="video_preview">
      <div className="video_container group relative w-full flex items-center justify-center p-6">
        <video
          ref={videoRef}
          src="/videos/preview01.mp4"
          controls={false}
          autoPlay
          loop
          muted
          className="rounded-2xl shadow-lg max-w-7xl w-full"
        />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black/20 hidden group-hover:flex items-center justify-center">
          <button
            onClick={handleFullscreen}
            className=" px-4 py-2 bg-black text-white rounded-md"
          >
            click to view full screen
          </button>
        </div>
      </div>
    </section>
  );
}
