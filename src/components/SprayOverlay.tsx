"use client";

import { useEffect, useRef } from "react";
import { usePageTransition } from "./PageTransitionProvider";
import {
  COVER_STROKE_DURATION,
  COVER_STAGGER,
  REVEAL_STROKE_DURATION,
  REVEAL_STAGGER,
  SPRAY_COLOR,
  SPRAY_PARTICLE_COLOR,
  type SprayStroke,
} from "./sprayConfig";

type Point = { x: number; y: number };

type AnimatedStroke = {
  stroke: SprayStroke;
  progress: number;
  startProgress: number;
  target: number;
  startTime: number;
  duration: number;
  delay: number;
};

function quadPoint(p0: Point, p1: Point, p2: Point, s: number): Point {
  const mt = 1 - s;
  return {
    x: mt * mt * p0.x + 2 * mt * s * p1.x + s * s * p2.x,
    y: mt * mt * p0.y + 2 * mt * s * p1.y + s * s * p2.y,
  };
}

function quadTangent(p0: Point, p1: Point, p2: Point, s: number): Point {
  const mt = 1 - s;
  return {
    x: 2 * mt * (p1.x - p0.x) + 2 * s * (p2.x - p1.x),
    y: 2 * mt * (p1.y - p0.y) + 2 * s * (p2.y - p1.y),
  };
}

const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);
const easeInCubic = (x: number) => x * x * x;

export function SprayOverlay() {
  const { phase, strokes } = usePageTransition();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animatedRef = useRef<AnimatedStroke[]>([]);
  const active = phase !== "idle";

  // A fresh set of strokes means a brand new transition: reset to a clean,
  // unpainted baseline before the phase-driven effect below animates it in.
  useEffect(() => {
    const now = performance.now();
    animatedRef.current = strokes.map((stroke) => ({
      stroke,
      progress: 0,
      startProgress: 0,
      target: 0,
      startTime: now,
      duration: COVER_STROKE_DURATION,
      delay: 0,
    }));
  }, [strokes]);

  useEffect(() => {
    const now = performance.now();
    const list = animatedRef.current;
    const n = list.length;
    const covering = phase === "covering" || phase === "covered" || phase === "navigating";

    if (covering) {
      list.forEach((a, i) => {
        a.startProgress = a.progress;
        a.target = 1;
        a.startTime = now;
        a.duration = COVER_STROKE_DURATION;
        a.delay = i * COVER_STAGGER;
      });
    } else if (phase === "revealing") {
      list.forEach((a, i) => {
        a.startProgress = a.progress;
        a.target = 0;
        a.startTime = now;
        a.duration = REVEAL_STROKE_DURATION;
        a.delay = (n - 1 - i) * REVEAL_STAGGER;
      });
    }
  }, [phase]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let rafId = 0;

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      const baseWidth = height * 0.16;

      for (const a of animatedRef.current) {
        const elapsed = now - a.startTime - a.delay;
        const localT = elapsed <= 0 ? 0 : Math.min(1, elapsed / a.duration);
        const eased = a.target >= a.startProgress ? easeOutCubic(localT) : easeInCubic(localT);
        a.progress = a.startProgress + (a.target - a.startProgress) * eased;

        if (a.progress <= 0.001) continue;

        const [p0f, p1f, p2f] = a.stroke.points;
        const p0 = { x: p0f.x * width, y: p0f.y * height };
        const p1 = { x: p1f.x * width, y: p1f.y * height };
        const p2 = { x: p2f.x * width, y: p2f.y * height };

        const segments = 28;
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = SPRAY_COLOR;
        ctx.lineWidth = baseWidth * a.stroke.widthFactor;

        for (let s = 0; s <= segments; s++) {
          const t = (s / segments) * a.progress;
          const pt = quadPoint(p0, p1, p2, t);
          if (s === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();

        ctx.fillStyle = SPRAY_PARTICLE_COLOR;
        const halfWidth = (baseWidth * a.stroke.widthFactor) / 2;
        for (const particle of a.stroke.particles) {
          if (particle.s > a.progress) continue;
          const center = quadPoint(p0, p1, p2, particle.s);
          const tangent = quadTangent(p0, p1, p2, particle.s);
          const len = Math.hypot(tangent.x, tangent.y) || 1;
          const nx = -tangent.y / len;
          const ny = tangent.x / len;
          const px = center.x + nx * particle.offset * halfWidth;
          const py = center.y + ny * particle.offset * halfWidth;
          ctx.beginPath();
          ctx.arc(px, py, particle.radius * baseWidth, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[9990]"
      style={{ pointerEvents: active ? "auto" : "none" }}
    />
  );
}
