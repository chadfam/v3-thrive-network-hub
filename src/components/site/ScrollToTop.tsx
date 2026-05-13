import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On every route change, scroll back to the top of the page, unless the URL
 * carries a hash (in which case the browser's own anchor handling wins).
 * Without this, react-router keeps the previous scroll position, so links land
 * mid-page instead of at the top.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
