import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const SITE_URL = "https://unitedtothrive.com";
const DEFAULT_DESCRIPTION =
  "The network behind Profit Partners, Mastermind Passport, Command Central, and the WER1 referral engine. Where businesses become famous for families.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
};

const Layout = ({
  children,
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
}: LayoutProps) => {
  const fullTitle = title
    ? `${title} | United to Thrive`
    : "United to Thrive | Grow through partnerships. Famous for families.";
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        {noindex && <meta name="robots" content="noindex, nofollow" />}
        <link rel="canonical" href={url} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={ogType} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="United to Thrive" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-slate-ink focus:rounded-md focus:shadow-lg focus:outline focus:outline-2 focus:outline-brand-blue"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
