import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThriveLogo from "@/components/site/ThriveLogo";
import { cn } from "@/lib/utils";

type SubItem = { label: string; description: string; href: string; isOverview?: boolean };
type NavItem = { label: string; href: string; items: SubItem[] };

const nav: NavItem[] = [
  {
    label: "For Businesses",
    href: "/businesses",
    items: [
      { label: "Overview", description: "For Businesses", href: "/businesses", isOverview: true },
      { label: "Profit Partners™", description: "The flagship referral alliance", href: "/profit-partners" },
      { label: "Mastermind Passport™", description: "Proximity is power. Get in the room.", href: "/mastermind-passport" },
      { label: "Command Central™", description: "Your vetted board of advisors & experts", href: "/command-central" },
    ],
  },
  {
    label: "For Leaders",
    href: "/leaders",
    items: [
      { label: "Overview", description: "For Leaders", href: "/leaders", isOverview: true },
      { label: "FAM Guides", description: "Help families feel more connected", href: "/fam-guides" },
      { label: "Local Leaders", description: "One trusted connector per industry in your area", href: "/local-leaders" },
      { label: "Expert Faculty", description: "More income streams for established experts", href: "/expert-faculty" },
    ],
  },
  {
    label: "Solutions",
    href: "/promo-engine",
    items: [
      { label: "Promo Engine", description: "Sell promotions online before customers walk in", href: "/promo-engine" },
      { label: "Team Wellness Hub", description: "Better health for your team, lower taxes for you", href: "/team-wellness-hub" },
      { label: "WER1", description: "One magic link to promote every program", href: "/wer1" },
    ],
  },
  {
    label: "About",
    href: "/about",
    items: [
      { label: "About United to Thrive", description: "The team and the why", href: "/about", isOverview: true },
      { label: "Contact", description: "Get in touch", href: "/contact" },
    ],
  },
];

const Header = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const menuRefs = useRef<Array<HTMLDivElement | null>>([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Close on route change
  useEffect(() => {
    setOpenIdx(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  // Escape closes
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        if (openIdx !== null) {
          setOpenIdx(null);
          itemRefs.current[openIdx]?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx]);

  // Click outside
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (openIdx === null) return;
      const target = e.target as Node;
      const inMenu = menuRefs.current[openIdx]?.contains(target);
      const inTrigger = itemRefs.current[openIdx]?.contains(target);
      if (!inMenu && !inTrigger) setOpenIdx(null);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [openIdx]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [mobileOpen]);

  const clearTimers = () => {
    if (openTimer.current) { window.clearTimeout(openTimer.current); openTimer.current = null; }
    if (closeTimer.current) { window.clearTimeout(closeTimer.current); closeTimer.current = null; }
  };

  const scheduleOpen = (idx: number) => {
    clearTimers();
    openTimer.current = window.setTimeout(() => setOpenIdx(idx), 100);
  };
  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setOpenIdx(null), 200);
  };

  const isActive = (href: string) => location.pathname === href;
  const sectionActive = (item: NavItem) => item.items.some(s => isActive(s.href));

  const onParentKeyDown = (e: KeyboardEvent<HTMLAnchorElement>, idx: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpenIdx(idx);
      // focus first menu item
      window.setTimeout(() => {
        const menu = menuRefs.current[idx];
        const first = menu?.querySelector<HTMLAnchorElement>('[role="menuitem"]');
        first?.focus();
      }, 0);
    }
  };

  const onMenuKeyDown = (e: KeyboardEvent<HTMLDivElement>, idx: number) => {
    const menu = menuRefs.current[idx];
    if (!menu) return;
    const items = Array.from(menu.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]'));
    const currentIdx = items.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[Math.min(items.length - 1, currentIdx + 1)]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (currentIdx <= 0) {
        itemRefs.current[idx]?.focus();
      } else {
        items[currentIdx - 1]?.focus();
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-slate-ink/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" aria-label="Thrive home" className="inline-flex items-center">
          <ThriveLogo className="h-7 md:h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10 h-full">
          {nav.map((item, idx) => {
            const isOpen = openIdx === idx;
            const sActive = sectionActive(item);
            return (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => scheduleOpen(idx)}
                onMouseLeave={scheduleClose}
              >
                <Link
                  ref={(el) => (itemRefs.current[idx] = el)}
                  to={item.href}
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  onKeyDown={(e) => onParentKeyDown(e, idx)}
                  className={cn(
                    "inline-flex items-center gap-1 text-[15px] text-slate-ink hover:text-slate-ink/70 transition-colors py-2",
                    sActive && "font-medium"
                  )}
                >
                  <span className={cn("relative", sActive && "after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:bg-brand-blue")}>
                    {item.label}
                  </span>
                  <ChevronDown
                    className={cn("w-3.5 h-3.5 transition-transform duration-200", isOpen && "rotate-180")}
                    aria-hidden="true"
                  />
                </Link>

                <div
                  ref={(el) => (menuRefs.current[idx] = el)}
                  role="menu"
                  onKeyDown={(e) => onMenuKeyDown(e, idx)}
                  onMouseEnter={clearTimers}
                  onMouseLeave={scheduleClose}
                  className={cn(
                    "absolute left-0 top-full mt-2 min-w-[320px] max-w-[380px] bg-white rounded-2xl border border-[#E0E3E7] py-6 px-4 z-[1000]",
                    "transition-all duration-150 motion-reduce:transition-none",
                    isOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  )}
                  style={{ boxShadow: "0 12px 32px rgba(48, 59, 71, 0.12)" }}
                >
                  <ul className="flex flex-col gap-1">
                    {item.items.map((sub) => {
                      const active = isActive(sub.href);
                      return (
                        <li key={sub.href}>
                          <Link
                            to={sub.href}
                            role="menuitem"
                            aria-current={active ? "page" : undefined}
                            tabIndex={isOpen ? 0 : -1}
                            className="group relative block rounded-lg px-3 py-3 min-h-[44px] hover:bg-brand-blue/[0.08] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-ink/20"
                          >
                            {sub.isOverview && (
                              <span aria-hidden className="block w-6 h-[2px] bg-brand-blue mb-1.5 rounded-full" />
                            )}
                            <div className="flex items-center gap-2">
                              {active && (
                                <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                              )}
                              <span className={cn("font-serif-display text-[17px] text-slate-ink leading-tight", active && "font-medium")}>
                                {sub.label}
                              </span>
                            </div>
                            <div className="text-[13px] text-slate-500 mt-0.5 leading-snug">
                              {sub.description}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/apply"
            className="hidden sm:inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-full text-[14px] font-medium text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors"
          >
            Apply with Profit Partners
          </Link>
          <Link
            to="/apply"
            className="sm:hidden inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-full text-[14px] font-medium text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors"
          >
            Apply
          </Link>
          <button
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-slate-ink"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-50 bg-background md:hidden overflow-y-auto">
          <div className="h-16 px-6 flex items-center justify-between border-b border-slate-ink/10">
            <ThriveLogo className="h-7 w-auto" />
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="inline-flex items-center justify-center w-11 h-11 text-slate-ink">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <nav className="flex flex-col px-4 py-6">
            {nav.map((item, idx) => {
              const expanded = mobileExpanded === idx;
              const sActive = sectionActive(item);
              return (
                <div key={item.label} className={cn("relative border-b border-slate-ink/5", sActive && "border-l-[3px] border-l-transparent")}>
                  {sActive && <span aria-hidden className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-blue" />}
                  <div className="flex items-stretch">
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 font-serif-display text-2xl text-slate-ink py-4 px-3 min-h-[44px] flex items-center"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={expanded}
                      onClick={() => setMobileExpanded(expanded ? null : idx)}
                      className="w-11 h-11 self-center flex items-center justify-center text-slate-ink"
                    >
                      <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", expanded && "rotate-180")} />
                    </button>
                  </div>
                  {expanded && (
                    <ul className="pl-6 pb-4 flex flex-col gap-3">
                      {item.items.map((sub) => {
                        const active = isActive(sub.href);
                        return (
                          <li key={sub.href}>
                            <Link
                              to={sub.href}
                              onClick={() => setMobileOpen(false)}
                              aria-current={active ? "page" : undefined}
                              className="block py-2 min-h-[44px]"
                            >
                              <div className="flex items-center gap-2">
                                {active && <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />}
                                <span className={cn("font-serif-display text-[17px] text-slate-ink", active && "font-medium")}>
                                  {sub.label}
                                </span>
                              </div>
                              <div className="text-[13px] text-slate-500 mt-0.5">{sub.description}</div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
