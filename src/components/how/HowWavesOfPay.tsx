const HowWavesOfPay = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm opacity-[0.04] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-slate-500">
            THE PATENTED MECHANIC
          </p>
          <h2
            className="mt-6 font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Why we patented this.
          </h2>
          <div className="mt-8 space-y-6 max-w-[480px]">
            <p className="text-[19px] leading-relaxed text-slate-700">
              Most affiliate models stop at one tier. The person who clicks your link generates a commission. Anyone they bring in is invisible to your earnings. WER1 doesn't work that way.
            </p>
            <p className="text-[19px] leading-relaxed text-slate-700">
              The Waves of Pay model is patented because it solves a specific problem. When you bring someone into the network and they go on to make introductions, you don't disappear from the math. The platform keeps tracking. The percentage decreases as the wave moves outward, but it never zeros out.
            </p>
            <p className="text-[19px] leading-relaxed text-slate-700">
              This is what we mean by movement-driven commerce. The whole network is built so that doing the work of connecting actually keeps paying.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[320px] md:w-[480px]">
            <svg viewBox="0 0 480 480" className="w-full h-auto" role="img" aria-label="Concentric ripple diagram with center labeled You and three outward waves.">
              <defs>
                <linearGradient id="wopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="25%" stopColor="#1D4ED8" />
                  <stop offset="55%" stopColor="#1D4ED8" />
                  <stop offset="85%" stopColor="#1D4ED8" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
              </defs>

              {/* Rings */}
              <circle cx="240" cy="240" r="160" fill="none" stroke="#7A8390" strokeOpacity="0.45" strokeWidth="1" />
              <circle cx="240" cy="240" r="200" fill="none" stroke="#7A8390" strokeOpacity="0.28" strokeWidth="1" />
              <circle cx="240" cy="240" r="230" fill="none" stroke="#7A8390" strokeOpacity="0.16" strokeWidth="1" />

              {/* Lines from center to outer dots */}
              {[
                [240 + 160 * Math.cos(-1.2), 240 + 160 * Math.sin(-1.2)],
                [240 + 160 * Math.cos(0.6), 240 + 160 * Math.sin(0.6)],
                [240 + 160 * Math.cos(2.4), 240 + 160 * Math.sin(2.4)],
                [240 + 200 * Math.cos(-2.0), 240 + 200 * Math.sin(-2.0)],
                [240 + 200 * Math.cos(1.4), 240 + 200 * Math.sin(1.4)],
                [240 + 230 * Math.cos(-0.4), 240 + 230 * Math.sin(-0.4)],
                [240 + 230 * Math.cos(2.9), 240 + 230 * Math.sin(2.9)],
              ].map(([x, y], i) => (
                <line key={i} x1="240" y1="240" x2={x} y2={y} stroke="url(#wopGrad)" strokeOpacity="0.35" strokeWidth="1" />
              ))}

              {/* Ring 1 dots */}
              {[-1.2, 0.6, 2.4].map((a, i) => (
                <circle key={`r1-${i}`} cx={240 + 160 * Math.cos(a)} cy={240 + 160 * Math.sin(a)} r="8" fill="url(#wopGrad)" opacity="0.85" />
              ))}
              {/* Ring 2 dots */}
              {[-2.0, 1.4].map((a, i) => (
                <circle key={`r2-${i}`} cx={240 + 200 * Math.cos(a)} cy={240 + 200 * Math.sin(a)} r="6" fill="url(#wopGrad)" opacity="0.55" />
              ))}
              {/* Ring 3 dots */}
              {[-0.4, 2.9].map((a, i) => (
                <circle key={`r3-${i}`} cx={240 + 230 * Math.cos(a)} cy={240 + 230 * Math.sin(a)} r="5" fill="url(#wopGrad)" opacity="0.35" />
              ))}

              {/* Center */}
              <circle cx="240" cy="240" r="40" fill="url(#wopGrad)" />
              <text x="240" y="246" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600">
                You
              </text>
            </svg>

            <div className="mt-6 space-y-2 text-[13px] font-medium text-slate-500">
              <p>First wave: people you brought in directly</p>
              <p>Second wave: people they brought in</p>
              <p>Third wave: and outward</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWavesOfPay;