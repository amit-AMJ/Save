import { useEffect } from 'react';

const BottomAnchorAd = ({ adUnitPath }) => {
  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] };

    googletag.cmd.push(() => {
      const anchorSlot = googletag.defineOutOfPageSlot(
        adUnitPath,
        googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR
      );

      if (anchorSlot) {
        anchorSlot.addService(googletag.pubads());
      }

      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    });
  }, [adUnitPath]);

  return null; 
};

export default BottomAnchorAd;
