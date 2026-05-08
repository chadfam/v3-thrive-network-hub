import heroImg from "@/assets/hero-mastermind.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={heroImg}
        alt="Small business owners in a candid mastermind meeting around a wooden table, warm daylight, exposed brick."
        width={1920}
        height={1080}
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.92) 35%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.05) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="font-serif-display hero-headline text-slate-ink">
            Where businesses become <span className="ppx-italic">famous for families</span>.
          </h1>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[540px]">
            The network behind Profit Partners, Mastermind Passport, FAM Guides, Local Leaders, the WER1 referral engine, and every program in between. Built on a single idea: the businesses that win are the ones families recommend.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/businesses" className="btn-primary">
              For Businesses
            </Link>
            <Link to="/leaders" className="btn-secondary">
              For Leaders
            </Link>
          </div>

          <Link
            to="/how-it-works"
            className="mt-6 inline-block text-[14px] text-[hsl(var(--slate-500))] hover:text-slate-ink transition-colors"
          >
            Want to earn from your introductions? Learn how →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;