'use client';

import { useEffect } from 'react';

/**
 * Safety net for bfcache restoration.
 * If a user somehow navigates away from the page in the same tab
 * and presses back, force a full reload to fix broken WebGL contexts
 * and stale Framer Motion animations.
 */
export default function BfcacheReload() {
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  return null;
}
