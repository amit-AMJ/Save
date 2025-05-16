import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const GPTAd = ({ adUnitPath, sizes, divId }) => {
  const adRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!window.googletag || !window.googletag.apiReady) {
      const script = document.createElement('script');
      script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
      script.async = true;
      document.head.appendChild(script);
    }

    const defineAd = () => {
      const googletag = window.googletag;

      const existingSlot = googletag.pubads().getSlots().find(slot => slot.getSlotElementId() === divId);
      if (existingSlot) {
        googletag.destroySlots([existingSlot]);
      }

      googletag.defineSlot(adUnitPath, sizes, divId)?.addService(googletag.pubads());
      googletag.pubads().setConfig({ singleRequest: true });
      googletag.enableServices();
      googletag.display(divId);
    };

    window.googletag = window.googletag || {};
    window.googletag.cmd = window.googletag.cmd || [];

    window.googletag.cmd.push(() => {
      if (adRef.current) defineAd();
    });

    return () => {
      if (window.googletag && window.googletag.apiReady) {
        const slot = window.googletag.pubads().getSlots().find(s => s.getSlotElementId() === divId);
        if (slot) window.googletag.destroySlots([slot]);
      }
    };
  }, [location.pathname]);

  return (
    <div
      id={divId}
      ref={adRef}
      style={{
        minWidth: Math.min(...sizes.map(size => size[0])) + 'px',
        minHeight: Math.min(...sizes.map(size => size[1])) + 'px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    />
  );
};

export default GPTAd;
