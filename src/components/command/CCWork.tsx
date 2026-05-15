import { Users, Megaphone, Calculator, Scale, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Moment = { Icon: LucideIcon; text: string };

const moments: Moment[] = [
  { Icon: Users, text: "An executive coaching session in motion." },
  { Icon: Megaphone, text: "A marketing campaign moving from idea to launch." },
  { Icon: Calculator, text: "Books closing on a quarter." },
  { Icon: Calculator, text: "Tax planning before year end." },
  { Icon: Scale, text: "A partnership agreement going from handshake to ink." },
  { Icon: Scale, text: "A succession plan getting written down." },
  { Icon: Code, text: "A CRM project standing up its first workflows." },
  { Icon: Code, text: "An AI workflow getting tuned for the team." },
];

const CCWork = () => {
  return (
    <section className="bg-brand-blue/5 border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
              }}
            >
              Inside the work.
            </h2>
            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[480px]">
              The work the board does is specific. These are some of the kinds of moments that come up across the year.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {moments.map((m, i) => {
                const Icon = m.Icon;
                return (
                  <li key={i} className="flex items-start gap-4">
                    <Icon
                      className="w-5 h-5 md:w-6 md:h-6 text-brand-blue/70 mt-1.5 shrink-0"
                      strokeWidth={1.5}
                    />
                    <p className="font-serif-display italic text-slate-ink text-[18px] md:text-[20px] leading-snug">
                      {m.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCWork;
