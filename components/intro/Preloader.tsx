"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cubicBezier } from "framer-motion";
import { cn } from "@/lib/utils";
import { INTRO_STORAGE_KEY } from "@/lib/intro";
import { useIntro } from "./intro-context";

/**
 * First-visit loading screen, after Igor Reif's Smart Preloader: a fill rises
 * from the bottom with a counter in the corner, stalling briefly at a couple
 * of points the way a real load does, while the name rolls in letter by
 * letter. Text inverts where the fill has passed. Once full, the curtain's
 * bottom edge wipes up and off the page, cutting through everything in place.
 *
 * It renders on the server so the very first paint is the curtain, not a
 * flash of page. A blocking script in the root layout marks <html> with
 * data-intro="seen" from sessionStorage before that paint, and the CSS hides
 * the curtain outright in that case, so a reload never replays it. Anyone who
 * asked for reduced motion skips it entirely.
 */

const NAME = "Zaeem Tauqir";
const LABEL = "Software Engineer";

const START_DELAY = 0.2;
const FILL_DURATION = 2;
const EXIT_DURATION = 0.8;
/** Points (in %) where the fill slows down, as if waiting on the network. */
const SLOW_STEPS = [27, 82];

const easeInOut = cubicBezier(0.83, 0, 0.17, 1);

/**
 * Remaps linear time so progress crawls through a window around each slow
 * step: speed dips to `slowFactor` at the step and eases back on either side.
 */
function createSlowWarp(steps: number[], windowPct = 16, slowFactor = 0.12) {
  const half = windowPct / 2;
  const samples = 200;
  const speedAt = (pct: number) => {
    let influence = 0;
    for (const s of steps) {
      const d = Math.abs(pct - s);
      if (d < half) influence = Math.max(influence, 0.5 * (1 + Math.cos((Math.PI * d) / half)));
    }
    return 1 - (1 - slowFactor) * influence;
  };

  // Cumulative time needed to reach each sampled percentage.
  const timeAt = [0];
  for (let i = 1; i <= samples; i++) {
    const mid = ((i - 0.5) / samples) * 100;
    timeAt.push(timeAt[i - 1] + 100 / samples / speedAt(mid));
  }
  const total = timeAt[samples];

  return (t: number) => {
    const target = Math.min(1, Math.max(0, t)) * total;
    let lo = 1;
    let hi = samples;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (timeAt[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    const t0 = timeAt[lo - 1];
    const t1 = timeAt[lo];
    return (lo - 1 + (t1 > t0 ? (target - t0) / (t1 - t0) : 0)) / samples;
  };
}

const slowWarp = createSlowWarp(SLOW_STEPS);

gsap.registerPlugin(useGSAP);

export function Preloader() {
  const { reveal } = useIntro();
  const [done, setDone] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const html = document.documentElement;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const finish = () => {
        html.dataset.intro = "seen";
        try {
          sessionStorage.setItem(INTRO_STORAGE_KEY, "seen");
        } catch {}
        reveal();
        setDone(true);
      };

      if (html.dataset.intro === "seen" || reduced) {
        finish();
        return;
      }

      const letters = gsap.utils.toArray<HTMLElement>("[data-preloader-letter]");
      const counters = gsap.utils.toArray<HTMLElement>("[data-preloader-counter]");
      const load = { t: 0 };
      const exit = { v: 0 };

      // CSS parks the letters below their line for the first paint; hand that
      // offset over to GSAP as a percentage so it does not mix with pixels.
      gsap.set(letters, { y: 0, yPercent: 110 });

      gsap
        .timeline({ onComplete: finish })
        .to(letters, { yPercent: 0, duration: 1, ease: "expo.out", stagger: 0.045 }, START_DELAY)
        .to(
          load,
          {
            t: 1,
            duration: FILL_DURATION,
            ease: "none",
            onUpdate: () => {
              const p = easeInOut(slowWarp(load.t)) * 100;
              const text = `${load.t >= 1 ? 100 : Math.floor(p)}%`;
              counters.forEach((el) => (el.textContent = text));
              fill.current!.style.clipPath = `inset(${100 - p}% 0 0 0)`;
            },
          },
          START_DELAY,
        )
        .set(root.current, { pointerEvents: "none" }, "+=0.1")
        .addLabel("exit")
        .to(
          exit,
          {
            v: 1,
            duration: EXIT_DURATION,
            ease: "none",
            onUpdate: () => {
              root.current!.style.clipPath = `inset(0 0 ${easeInOut(exit.v) * 100}% 0)`;
            },
          },
          "exit",
        )
        .add(reveal, `exit+=${EXIT_DURATION * 0.3}`);
    },
    { scope: root },
  );

  if (done) return null;

  return (
    <div ref={root} data-preloader aria-hidden="true" className="fixed inset-0 z-[100] select-none">
      <Layer className="bg-secondary text-background" labelClassName="text-background" />
      <div ref={fill} className="absolute inset-0" style={{ clipPath: "inset(100% 0 0 0)" }}>
        <Layer
          className="bg-primary text-background"
          labelClassName="text-primary-foreground/60"
        />
      </div>
    </div>
  );
}

/**
 * One full-screen copy of the preloader's contents. Two are stacked — base
 * and fill — so the text reads in the right colour on either side of the
 * rising edge.
 */
function Layer({ className, labelClassName }: { className: string; labelClassName: string }) {
  return (
    <div className={cn("absolute inset-0 flex flex-col", className)}>
      <div className="flex flex-1 items-center justify-center px-6">
        {/* <h2 className="flex overflow-hidden whitespace-pre text-[13vw] font-semibold leading-[1.05] tracking-tighter sm:text-[9vw]">
          {NAME.split("").map((char, i) => (
            <span key={i} data-preloader-letter className="inline-block">
              {char}
            </span>
          ))}
        </h2> */}
      </div>

      <div className="flex justify-end p-6 sm:p-10">
        {/* <span className={cn("text-xl uppercase tracking-[0.2em]", labelClassName)}>{LABEL}</span> */}
        <h2
          data-preloader-counter
          className="text-[24vw] font-semibold leading-[0.8] tracking-tighter tabular-nums sm:text-[14vw]"
        >
          0%
        </h2>
      </div>
    </div>
  );
}
