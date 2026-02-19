import { useEffect, useRef, useState } from "react";
import "../styles/DentalCursor.css";

const TOOTH_IMAGE = "/images/happy-teeth.webp";

const SPARKLE_COLORS = ["#facc15", "#f59e0b", "#fbbf24", "#ffffff", "#bae6fd"];

function makeSparkle(x, y) {
  return {
    id: Math.random().toString(36).slice(2),
    x,
    y,
    size: Math.random() * 10 + 5,
    color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
    angle: Math.random() * 360,
    vx: (Math.random() - 0.5) * 4,
    vy: (Math.random() - 0.5) * 4 - 1.5,
    life: 1,
    decay: Math.random() * 0.035 + 0.025,
  };
}

export default function DentalCursor() {
  const mouseRef = useRef({ x: -200, y: -200 });
  const smoothRef = useRef({ x: -200, y: -200 });
  const frameRef = useRef();
  const sparkleBuffer = useRef([]);
  const lastSparkleTime = useRef(0);

  const [renderPos, setRenderPos] = useState({ x: -200, y: -200 });
  const [sparkles, setSparkles] = useState([]);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    document.body.style.cursor = "none";

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHovering(!!el?.closest("a, button, [role='button'], input, select, textarea"));

      const now = Date.now();
      if (now - lastSparkleTime.current > 45) {
        lastSparkleTime.current = now;
        sparkleBuffer.current.push(makeSparkle(e.clientX, e.clientY));
      }
    };

    const onDown = (e) => {
      setClicking(true);
      for (let i = 0; i < 12; i++) {
        sparkleBuffer.current.push(makeSparkle(e.clientX, e.clientY));
      }
    };

    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const LERP = 0.13;

    const animate = () => {
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * LERP;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * LERP;

      setRenderPos({ x: smoothRef.current.x, y: smoothRef.current.y });

      setSparkles((prev) => {
        const merged = [...prev, ...sparkleBuffer.current];
        sparkleBuffer.current = [];
        return merged
          .map((s) => ({
            ...s,
            life: s.life - s.decay,
            x: s.x + s.vx,
            y: s.y + s.vy,
            vy: s.vy + 0.08,
          }))
          .filter((s) => s.life > 0)
          .slice(-80);
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="dc-root" aria-hidden="true">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="dc-sparkle"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            opacity: Math.min(s.life * 1.5, 1),
            color: s.color,
            transform: `translate(-50%, -50%) rotate(${s.angle}deg) scale(${0.5 + s.life * 0.5})`,
          }}
        >
          <svg viewBox="0 0 12 12" fill="currentColor" width="100%" height="100%">
            <path d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z" />
          </svg>
        </div>
      ))}

      <div
        className={`dc-cursor ${clicking ? "dc-clicking" : ""} ${hovering ? "dc-hovering" : ""}`}
        style={{ left: renderPos.x, top: renderPos.y }}
      >
        <img src={TOOTH_IMAGE} alt="" className="dc-image" draggable={false} />
        {hovering && <div className="dc-ring" />}
      </div>
    </div>
  );
}