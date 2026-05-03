import { useEffect, useState } from "react";
import {
  pharaohs,
  tourismPlaces,
  culturalFigures,
  modernProjects,
} from "@/data/egypt";

const ALL_IMAGES = [
  ...pharaohs.map((p) => p.image),
  ...tourismPlaces.map((p) => p.image),
  ...culturalFigures.map((p) => p.image),
  ...modernProjects.map((p) => p.image),
];

// ← زود الاتنين دول برا الـ component
let imagesPreloaded = false;

function preloadImages(onProgress: (p: number) => void, onDone: () => void) {
  if (sessionStorage.getItem("imagesPreloaded")) {
    onDone();
    return;
  }
  let loaded = 0;
  ALL_IMAGES.forEach((src) => {
    const img = new Image();
    img.onload = img.onerror = () => {
      loaded++;
      onProgress(Math.round((loaded / ALL_IMAGES.length) * 100));
      if (loaded >= ALL_IMAGES.length) {
        sessionStorage.setItem("imagesPreloaded", "1");
        onDone();
      }
    };
    img.src = src;
  });
}
export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
  preloadImages(
    (p) => setProgress(p),
    () => {
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setExiting(true);
          setTimeout(onDone, 700);
        }, 500);
      }, 0);
    }
  );
}, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0d0a05",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        transition: "opacity 0.7s ease",
        opacity: exiting ? 0 : 1,
      }}
    >
      {/* عين حورس */}
      <svg
        style={{
          width: 80,
          height: 80,
          animation: "splashPulse 2.5s ease-in-out infinite",
        }}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          @keyframes splashPulse {
            0%, 100% { filter: drop-shadow(0 0 6px #c9963366); }
            50% { filter: drop-shadow(0 0 20px #f5d87aaa); }
          }
        `}</style>
        <ellipse
          cx="50"
          cy="44"
          rx="38"
          ry="22"
          fill="none"
          stroke="#c99633"
          strokeWidth="2.5"
        />
        <circle cx="50" cy="44" r="11" fill="#c99633" />
        <circle cx="50" cy="44" r="5" fill="#0d0a05" />
        <line
          x1="12"
          y1="44"
          x2="0"
          y2="56"
          stroke="#c99633"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="56"
          x2="4"
          y2="68"
          stroke="#c99633"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="88"
          y1="44"
          x2="100"
          y2="60"
          stroke="#c99633"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* هيروغليفي */}
      <div
        style={{
          fontSize: 28,
          letterSpacing: 14,
          opacity: 0.5,
          color: "#f5d87a",
        }}
      >
        𓂀 𓋴 𓁿 𓅓 𓊽
      </div>

      {/* لودر */}
      <div
        style={{
          width: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: "100%",
            height: 2,
            background: "#ffffff10",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "#c99633",
              borderRadius: 2,
              transition: "width 0.3s ease",
            }}
          />
        </div>
        <span
          style={{
            fontSize: 11,
            color: "#c99633",
            opacity: 0.5,
            letterSpacing: 2,
          }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
}
