import { useState } from "react";
import Layout from "@/components/site/Layout";
import { Helmet } from "react-helmet-async";
import heroAsset from "@/assets/oasis/hero.png.asset.json";
import interiorAsset from "@/assets/oasis/interior.png.asset.json";
import receptionAsset from "@/assets/oasis/reception.png.asset.json";
import poolAsset from "@/assets/oasis/pool.png.asset.json";

const NAVY = "#0F172A";
const BRAND = "#264B73";
const GOLD = "#FBBF24";

const highlights = [
  "Approximately 8,746 square feet of luxury living",
  "6 spacious bedrooms",
  "9 designer bathrooms",
  "Executive office and private workspaces",
  "Detached guest house",
  "Climate-controlled wine storage",
  "Fitness and wellness studio",
  "Teen lounge and entertainment spaces",
  "Resort-style pool and spa",
  "Outdoor kitchen and entertainment areas",
  "RV garage, workshop, and collector vehicle storage",
  "Expansive one-acre estate with stunning Scottsdale views",
];

const evening = [
  "Private luxury home tours",
  "Live music and entertainment",
  "Chef-inspired food and refreshments",
  "Networking with Scottsdale's leading business, real estate, and development professionals",
  "Luxury giveaways and special guest experiences",
  "Sunset poolside reception",
];

const hosts = ["The FAM Project", "The Luxury Look", "State 48 Roofing", "PNC Bank", "Sandstrom Law"];
const visionaries = ["SRJ Development", "Realty Executives", "Athena Development"];

const attendeeTypes = [
  "Prospective Buyer",
  "Real Estate Agent or Broker",
  "Investor",
  "Referral Partner",
  "Business Owner",
  "Luxury Home Enthusiast",
  "Other",
];

const Oasis = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams();
    data.forEach((v, k) => params.append(k, String(v)));
    const subject = encodeURIComponent("Oasis at 83rd RSVP");
    const body = encodeURIComponent(
      Array.from(data.entries()).map(([k, v]) => `${k}: ${v}`).join("\n")
    );
    window.location.href = `mailto:hello@unitedtothrive.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Layout
      title="An Exclusive Evening at The Oasis at 83rd"
      description="Friday, July 25, 2026. An exclusive evening inside one of Scottsdale's most extraordinary custom estates. Presented by SRJ Development and Realty Executives."
      canonical="/oasis"
      ogImage={`https://unitedtothrive.com${heroAsset.url}`}
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "An Exclusive Evening at The Oasis at 83rd",
          startDate: "2026-07-25T17:00:00-07:00",
          endDate: "2026-07-25T21:00:00-07:00",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "The Oasis at 83rd",
            address: {
              "@type": "PostalAddress",
              streetAddress: "10805 N. 83rd Street",
              addressLocality: "Scottsdale",
              addressRegion: "AZ",
              postalCode: "85260",
              addressCountry: "US",
            },
          },
          organizer: [
            { "@type": "Organization", name: "SRJ Development" },
            { "@type": "Organization", name: "Realty Executives" },
          ],
        })}</script>
      </Helmet>

      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
        <img
          src={heroAsset.url}
          alt="The Oasis at 83rd at dusk"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.85) 100%)" }} />
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            An Exclusive Evening at<br />The Oasis at 83rd
          </h1>
          <div className="mt-6 mx-auto w-16 h-px" style={{ backgroundColor: GOLD }} />
          <p className="mt-6 text-lg text-white/90">Presented by SRJ Development and Realty Executives</p>
          <p className="mt-2 text-base text-white/80">In partnership with Athena Development and Trinity Homes</p>
          <p className="mt-10 text-2xl md:text-3xl font-semibold" style={{ color: GOLD }}>
            Friday, July 25, 2026
          </p>
          <p className="mt-1 text-lg" style={{ color: GOLD }}>5:00 PM to 9:00 PM</p>
          <div className="mt-10 text-sm uppercase tracking-[0.18em] text-white/70">Location</div>
          <p className="mt-3 text-white/90">
            The Oasis at 83rd<br />
            10805 N. 83rd Street<br />
            Scottsdale, Arizona 85260
          </p>
          <a
            href="#rsvp"
            className="inline-block mt-10 px-8 py-4 font-semibold rounded-sm transition-colors"
            style={{ backgroundColor: GOLD, color: NAVY }}
          >
            RSVP Today
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: NAVY }}>
          Join us for an unforgettable evening inside one of Scottsdale's most extraordinary custom estates.
        </h2>
        <p className="mt-6 text-lg text-[#334155] leading-relaxed">
          Nestled on a private one-acre homesite in Scottsdale's coveted Cactus Corridor, The Oasis at 83rd represents the perfect blend of luxury, craftsmanship, innovation, and resort-style living.
        </p>
        <p className="mt-4 text-lg text-[#334155] leading-relaxed">
          This exclusive showcase offers guests the opportunity to experience an exceptional custom residence while enjoying an evening of connection, entertainment, and inspiration.
        </p>
      </section>

      <img src={interiorAsset.url} alt="Luxury interior at The Oasis at 83rd" className="w-full h-[420px] md:h-[520px] object-cover" />

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: NAVY }}>Property Highlights</h2>
        <div className="mt-4 mx-auto w-16 h-px" style={{ backgroundColor: GOLD }} />
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-[#334155]">
              <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: GOLD }} />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center text-[#334155] max-w-3xl mx-auto leading-relaxed">
          Designed for those who appreciate exceptional architecture and elevated living, every detail of The Oasis at 83rd was thoughtfully crafted to create an unparalleled lifestyle experience.
        </p>
      </section>

      <img src={receptionAsset.url} alt="Evening reception setting" className="w-full h-[420px] md:h-[520px] object-cover" />

      {/* Evening features */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: NAVY }}>Enjoy an Evening Featuring</h2>
        <div className="mt-4 mx-auto w-16 h-px" style={{ backgroundColor: GOLD }} />
        <ul className="mt-12 space-y-4">
          {evening.map((e) => (
            <li key={e} className="flex items-start gap-3 text-[#334155] text-lg">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: GOLD }} />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Hosts + visionaries */}
      <section style={{ backgroundColor: "#F8FAFC" }}>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: NAVY }}>Hosted By</h2>
            <div className="mt-4 w-16 h-px" style={{ backgroundColor: GOLD }} />
            <ul className="mt-8 space-y-3 text-[#334155] text-lg">
              {hosts.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: NAVY }}>Meet the Visionaries Behind the Home</h2>
            <div className="mt-4 w-16 h-px" style={{ backgroundColor: GOLD }} />
            <ul className="mt-8 space-y-3 text-[#334155] text-lg">
              {visionaries.map((v) => <li key={v}>{v}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <img src={poolAsset.url} alt="Pool and architecture at The Oasis at 83rd" className="w-full h-[420px] md:h-[520px] object-cover" />

      {/* RSVP form */}
      <section id="rsvp" className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: NAVY }}>RSVP Today</h2>
        <div className="mt-4 mx-auto w-16 h-px" style={{ backgroundColor: GOLD }} />
        <p className="mt-8 text-center text-[#334155] leading-relaxed">
          Whether you're a luxury home enthusiast, prospective buyer, referral partner, business owner, investor, or simply appreciate world-class design, we invite you to experience one of Scottsdale's most remarkable new residences.
        </p>
        <p className="mt-4 text-center text-[#334155] leading-relaxed">
          Join us for an evening of luxury, lifestyle, and connection at The Oasis at 83rd. Space is limited.
        </p>

        {submitted ? (
          <div className="mt-12 rounded-md border border-[#E2E8F0] bg-white p-8 text-center">
            <p className="text-lg font-semibold" style={{ color: NAVY }}>Thanks for your RSVP.</p>
            <p className="mt-2 text-[#334155]">Your email client should now open with your details. We will confirm your spot shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 grid gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="block text-sm font-medium text-[#0F172A]">First Name</span>
                <input required name="firstName" type="text" className="mt-2 w-full rounded-sm border border-[#CBD5E1] px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#264B73]" />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-[#0F172A]">Last Name</span>
                <input required name="lastName" type="text" className="mt-2 w-full rounded-sm border border-[#CBD5E1] px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#264B73]" />
              </label>
            </div>
            <label className="block">
              <span className="block text-sm font-medium text-[#0F172A]">Email Address</span>
              <input required name="email" type="email" className="mt-2 w-full rounded-sm border border-[#CBD5E1] px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#264B73]" />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-[#0F172A]">Phone Number</span>
              <input required name="phone" type="tel" className="mt-2 w-full rounded-sm border border-[#CBD5E1] px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#264B73]" />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-[#0F172A]">Attendee Type</span>
              <select required name="attendeeType" defaultValue="" className="mt-2 w-full rounded-sm border border-[#CBD5E1] px-4 py-3 text-[#0F172A] bg-white focus:outline-none focus:border-[#264B73]">
                <option value="" disabled>Select your industry</option>
                {attendeeTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </label>
            <label className="flex items-start gap-3 mt-2">
              <input name="profitPartnerInterest" type="checkbox" value="yes" className="mt-1 h-4 w-4" />
              <span className="text-sm text-[#334155]">I would like to learn about the United to Thrive Profit Partner referral program.</span>
            </label>
            <button
              type="submit"
              className="mt-4 px-8 py-4 font-semibold rounded-sm transition-colors"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Submit RSVP
            </button>
          </form>
        )}
      </section>
    </Layout>
  );
};

export default Oasis;
