import React, { useEffect, useMemo, useRef, useState, } from "react";
import '../About.css'

export interface AudioPlayerProps {
  src: string;
  title?: string;
  preload?: "none" | "metadata" | "auto";
  isPlaying: boolean;
  setIsPlaying: Function;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

export default function AudioPlayer({ src, title = "Audio", preload = "metadata", isPlaying, setIsPlaying}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isSeeking, setIsSeeking] = useState<boolean>(false);

  const fmt = useMemo(() => (s: number) => {
    if (!Number.isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${ss}`;
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const onTime = () => setCurrentTime(a.currentTime);
    const onMeta = () => setDuration(a.duration || 0);
    const onEnd = () => setIsPlaying(false);

    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("durationchange", onMeta);
    a.addEventListener("ended", onEnd);

    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("durationchange", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
    } else {
      try {
        await a.play();
        setIsPlaying(true);
      } catch (e) {
        console.error(e);
      }
    }
  };


  const percent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const seekTo = (clientX: number) => {
    const track = progressRef.current;
    const a = audioRef.current;
    if (!track || !a || !duration) return;
    const rect = track.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    const ratio = x / rect.width;
    a.currentTime = ratio * duration;
  };


  const onPointerMove = (e: PointerEvent) => {
    if (!isSeeking) return;
    seekTo(e.clientX);
  };

  const onPointerUp = () => {
    setIsSeeking(false);
    window.removeEventListener("pointermove", onPointerMove);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsSeeking(true);
    seekTo(e.clientX);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp, { once: true });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const a = audioRef.current;
    if (!a) return;
    if (e.key === "ArrowRight") {
      a.currentTime = clamp(a.currentTime + 5, 0, duration || a.currentTime);
    } else if (e.key === "ArrowLeft") {
      a.currentTime = clamp(a.currentTime - 5, 0, duration || a.currentTime);
    } else if (e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

    return (
    <div className="audio-card">
        <div className="controls">
        <button
            onClick={toggle}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="play-button"
        >
            {isPlaying ? (
            <svg className="playIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden>
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
            ) : (
            <svg className="playIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7z" />
            </svg>
            )}
        </button>

        <div className="content">
            <div className="title">{title}</div>

            <div
            ref={progressRef}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={duration || 0}
            aria-valuenow={currentTime}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            className="progress-track"
            >
            <div
                className="progress-fill"
                style={{ width: `${percent}%` }}
            />
            </div>

            <div className="time-row">
            <span>{fmt(currentTime)}</span>
            <span>{fmt(duration)}</span>
            </div>
        </div>
        </div>

        <audio ref={audioRef} src={src} preload={preload} hidden/>
    </div>
    );

}