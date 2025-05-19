import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { loadGPT } from './gpt-loader';

const GPTAd = ({ adUnitPath, sizes, divId }) => {
  const adRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let slot;

    loadGPT().then(() => {
      const { googletag } = window;

      googletag.cmd.push(() => {
        const existingSlot = googletag
          .pubads()
          .getSlots()
          .find((s) => s.getSlotElementId() === divId);

        if (existingSlot) {
          googletag.destroySlots([existingSlot]);
        }

        slot = googletag
          .defineSlot(adUnitPath, sizes, divId)
          ?.addService(googletag.pubads());

        if (!window._gptServicesEnabled) {
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
          window._gptServicesEnabled = true;
        }

        googletag.display(divId);
      });
    });

    return () => {
      if (window.googletag?.apiReady && slot) {
        window.googletag.destroySlots([slot]);
      }
    };
  }, [location.pathname, adUnitPath, sizes, divId]);

  return (
    <div
      id={divId}
      ref={adRef}
      style={{
        minWidth: Math.min(...sizes.map((s) => s[0])) + 'px',
        minHeight: Math.min(...sizes.map((s) => s[1])) + 'px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    />
  );
};

export default GPTAd;
