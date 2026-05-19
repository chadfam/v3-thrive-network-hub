import { Link } from "react-router-dom";
import ThriveLogo from "@/components/site/ThriveLogo";

type LinkItem = { label: string; to: string; external?: boolean };

const programs: LinkItem[] = [
  { label: "Profit Partners™", to: "/profit-partners" },
  { label: "Mastermind Passport™", to: "/mastermind-passport" },
  { label: "Command Central™", to: "/command-central" },
  { label: "FAM Guides", to: "/fam-guides" },
  { label: "Local Leaders", to: "/local-leaders" },
  { label: "Expert Faculty", to: "/expert-faculty" },
];

const solutions: LinkItem[] = [
  { label: "Promo Engine", to: "/promo-engine" },
  { label: "Team Wellness Hub", to: "/team-wellness-hub" },
  { label: "WER1", to: "/wer1" },
  { label: "FAM Central", to: "/fam-central" },
];

const company: LinkItem[] = [
  { label: "About", to: "/about" },
  { label: "Apply", to: "/apply" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
];

const network: LinkItem[] = [
  { label: "UnitedToThrive.com", to: "/" },
  { label: "ProfitPartnersPHX.com", to: "https://profitpartnersphx.com", external: true },
  { label: "PromoEngine.com", to: "https://promoengine.com", external: true },
  { label: "WER1.com", to: "https://wer1.com", external: true },
];

const ColHeader = ({ children }: { children: string }) => (
  <h4 className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#0F172A] mb-4">{children}</h4>
);

const renderLink = (l: LinkItem) =>
  l.external ? (
    <a
      key={l.label}
      href={l.to}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[14px] text-[#334155] hover:text-[#264B73] transition-colors"
    >
      {l.label}
    </a>
  ) : (
    <Link
      key={l.label}
      to={l.to}
      className="text-[14px] text-[#334155] hover:text-[#264B73] transition-colors"
    >
      {l.label}
    </Link>
  );

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }} className="text-[#0F172A]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12 md:py-16">
        <div className="max-w-3xl">
          <ThriveLogo className="h-9 w-auto" />
          <p className="mt-4 text-[14px] text-[#64748B] leading-relaxed max-w-xl">
            United to Thrive is the network behind Profit Partners, FAM Central, Local Leaders, and the WER1 Impact Network.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-5 gap-10">
          <div>
            <ColHeader>Programs</ColHeader>
            <ul className="space-y-3">{programs.map((p) => <li key={p.label}>{renderLink(p)}</li>)}</ul>
          </div>
          <div>
            <ColHeader>Solutions</ColHeader>
            <ul className="space-y-3">{solutions.map((p) => <li key={p.label}>{renderLink(p)}</li>)}</ul>
          </div>
          <div>
            <ColHeader>Company</ColHeader>
            <ul className="space-y-3">{company.map((p) => <li key={p.label}>{renderLink(p)}</li>)}</ul>
          </div>
          <div>
            <ColHeader>Network Sites</ColHeader>
            <ul className="space-y-3">{network.map((p) => <li key={p.label}>{renderLink(p)}</li>)}</ul>
          </div>
          <div>
            <ColHeader>Find us</ColHeader>
            <address className="not-italic text-[14px] text-[#334155] leading-relaxed">
              United To Thrive LLC<br />
              222 S Mill Ave, Suite 800<br />
              Tempe, AZ 85281
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#E2E8F0] flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <p className="text-[13px] text-[#94A3B8] leading-relaxed max-w-3xl">
            © 2026 United To Thrive LLC. All rights reserved. Profit Partners™, Mastermind Passport™, Command Central™, and Lifetime Client Agency™ are trademarks of United To Thrive LLC.
          </p>
          <p className="text-[13px] text-[#94A3B8] leading-relaxed md:text-right shrink-0">
            Headquartered in Tempe, AZ. Serving Phoenix and the broader network.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
