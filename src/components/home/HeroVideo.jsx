import { useRef } from "react";
import "../../styles/herovideo.css";

export default function BannerVideo({
  videoSrc = "https://www.w3schools.com/html/mov_bbb.mp4",
}) {
  const videoRef = useRef(null);

  return (
    <section className="bv-root">
      <video
        ref={videoRef}
        className="bv-video"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
}