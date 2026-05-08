import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/site/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout title="Page not found" description="The page you were looking for doesn't exist." noindex>
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-24 md:pb-32 text-center">
          <p className="text-[13px] tracking-[0.18em] uppercase text-[hsl(var(--slate-500))]">404</p>
          <h1 className="mt-6 font-serif-display text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            We couldn't find that page.
          </h1>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[560px] mx-auto">
            The link may be old or mistyped. Head back to the home page or use the navigation above to find what you were looking for.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors"
          >
            Return to home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
