import { useEffect } from "react";
import Layout from "@/components/site/Layout";

// Background image for the booking section. Sourced from Unsplash, visually verified.
const BOOKING_BG = "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1";

// GHL embed resize script (shared with the application form embed).
const GHL_EMBED_SCRIPT = "https://api.appendment.com/js/form_embed.js";

const Booking = () => {
  // Load the GHL embed script once. It resizes the calendar iframe to fit content.
  useEffect(() => {
    if (document.querySelector(`script[src="${GHL_EMBED_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = GHL_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Layout
      title="Book a call"
      description="Book your call with the United to Thrive team."
      canonical="/booking"
      noindex
    >
      {/* Section 1 - intro */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 md:px-16 pt-24 md:pt-32 pb-16 md:pb-24">
          <h1
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Book your <span className="text-brand-blue ppx-italic">call</span>.
          </h1>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px]">
            Thanks for applying to the WEcosystem. The last step is a short call with our team.
          </p>
          <p className="mt-4 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px]">
            Choose a time below that works for you, and we'll take it from there.
          </p>
        </div>
      </section>

      {/* Section 2 - the calendar (middle), on a scrimmed photo background */}
      <section className="relative overflow-hidden">
        <img
          src={`${BOOKING_BG}?auto=format&fit=crop&q=80&w=1600`}
          srcSet={`${BOOKING_BG}?auto=format&fit=crop&q=80&w=640 640w, ${BOOKING_BG}?auto=format&fit=crop&q=80&w=1280 1280w, ${BOOKING_BG}?auto=format&fit=crop&q=80&w=1920 1920w`}
          sizes="100vw"
          alt="Two people in conversation across a booth table in warm afternoon light."
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0" style={{ backgroundColor: "rgba(38,75,115,0.82)" }} />

        <div className="relative mx-auto max-w-2xl px-6 sm:px-10 md:px-16 py-20 md:py-28">
          <div className="text-center">
            <h2
              className="font-serif-display text-white"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              Pick a time.
            </h2>
          </div>

          <article className="mt-10 rounded-2xl overflow-hidden bg-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)]">
            <div aria-hidden className="h-1.5" style={{ backgroundColor: "#264B73" }} />
            <div className="p-4 sm:p-6">
              {/* GHL embedded booking calendar. form_embed.js resizes the iframe to fit. */}
              <iframe
                src="https://api.appendment.com/widget/booking/2JFBN5TMhdh4yTUNr5hV"
                style={{ width: "100%", height: "700px", border: "none", overflow: "hidden" }}
                scrolling="no"
                id="2JFBN5TMhdh4yTUNr5hV_1779141004615"
                title="Book a call with United to Thrive"
              />
            </div>
          </article>
        </div>
      </section>

      {/* Section 3 - what the call is */}
      <section style={{ backgroundColor: "#E9EFFB" }}>
        <div className="mx-auto max-w-[820px] px-6 sm:px-10 md:px-16 py-20 md:py-28 text-center">
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            When we <span className="text-brand-blue ppx-italic">talk</span>.
          </h2>
          <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            The call is a straightforward conversation. We'll talk through where you fit in the network, answer whatever you want to ask, and settle on the right next step together.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
