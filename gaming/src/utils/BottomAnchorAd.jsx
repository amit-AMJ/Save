import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadGPT } from './gpt-loader';

const BottomAnchorAd = ({ adUnitPath }) => {
  const location = useLocation();

  useEffect(() => {
    let anchorSlot;

    const initAnchorAd = () => {
      const { googletag } = window;

      googletag.cmd.push(() => {
        anchorSlot = googletag.defineOutOfPageSlot(
          adUnitPath,
          googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR
        );

        if (!anchorSlot) {
          console.warn('Failed to define BOTTOM_ANCHOR slot');
          return;
        }

        anchorSlot.addService(googletag.pubads());

        if (!window._gptServicesEnabled) {
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
          window._gptServicesEnabled = true;
        }
      });
    };

    loadGPT().then(initAnchorAd);

    return () => {
      if (window.googletag?.apiReady && anchorSlot) {
        window.googletag.destroySlots([anchorSlot]);
      }
    };
  }, [adUnitPath, location.pathname]);

  return null;
};

export default BottomAnchorAd;
