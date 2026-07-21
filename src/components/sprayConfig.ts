export type StrokePoint = { x: number; y: number };

export type SprayParticle = {
  /** Position along the stroke's curve, 0..1. */
  s: number;
  /** Perpendicular offset from the stroke centerline, in half-widths (can exceed 1 for overspray). */
  offset: number;
  /** Radius as a fraction of the stroke's base width. */
  radius: number;
};

export type SprayStroke = {
  /** Start, control and end point, as fractions of viewport width/height (can be <0 or >1). */
  points: [StrokePoint, StrokePoint, StrokePoint];
  /** Relative thickness multiplier for this stroke. */
  widthFactor: number;
  /** 0 (first, bottom-right) -> 1 (last, top-left). Drives stagger order. */
  t: number;
  particles: SprayParticle[];
};

/** Main paint color — swap this to re-theme the effect (e.g. back to brand green). */
export const SPRAY_COLOR = "#f5f5f5";
export const SPRAY_PARTICLE_COLOR = "rgba(245, 245, 245, 0.55)";

const STROKE_COUNT = 7;

export const COVER_STROKE_DURATION = 380;
export const COVER_STAGGER = 70;
export const REVEAL_STROKE_DURATION = 300;
export const REVEAL_STAGGER = 55;

export const COVER_TOTAL_MS = Math.round(COVER_STAGGER * (STROKE_COUNT - 1) + COVER_STROKE_DURATION);
export const REVEAL_TOTAL_MS = Math.round(REVEAL_STAGGER * (STROKE_COUNT - 1) + REVEAL_STROKE_DURATION);

function randRange(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function buildParticles(): SprayParticle[] {
  const count = 8 + Math.floor(Math.random() * 5);
  return Array.from({ length: count }, () => ({
    s: randRange(0.08, 0.95),
    offset: randRange(0.55, 1.35) * (Math.random() < 0.5 ? -1 : 1),
    radius: randRange(0.025, 0.06),
  }));
}

/**
 * Generates a fresh, organic zigzag stroke path from bottom-right to top-left.
 * Regenerated on every transition so consecutive navigations don't look identical.
 */
export function generateStrokes(): SprayStroke[] {
  const strokes: SprayStroke[] = [];

  for (let i = 0; i < STROKE_COUNT; i++) {
    const t = i / (STROKE_COUNT - 1);
    const goingLeft = i % 2 === 0;
    const y = 1.1 - t * 1.2;
    const yJitter = randRange(-0.035, 0.035);
    const startX = goingLeft ? randRange(1.08, 1.22) : randRange(-0.22, -0.08);
    const endX = goingLeft ? randRange(-0.22, -0.08) : randRange(1.08, 1.22);
    const midX = (startX + endX) / 2 + randRange(-0.12, 0.12);
    const bulge = randRange(0.05, 0.09) * (goingLeft ? 1 : -1);
    const midY = y + yJitter + randRange(-0.03, 0.03);

    strokes.push({
      points: [
        { x: startX, y: y + yJitter },
        { x: midX, y: midY - bulge },
        { x: endX, y: y + yJitter - bulge },
      ],
      widthFactor: randRange(0.82, 1.15),
      t,
      particles: buildParticles(),
    });
  }

  return strokes;
}
