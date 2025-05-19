import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadGPT } from './gpt-loader';

const RewardedAd = ({ adUnitPath, delay = 2000 }) => {
  const location = useLocation();

  useEffect(() => {
    let slot;

    const initRewardedAd = () => {
      const { googletag } = window;

      googletag.cmd.push(() => {
        slot = googletag.defineOutOfPageSlot(
          adUnitPath,
          googletag.enums.OutOfPageFormat.REWARDED
        );

        if (!slot) {
          console.error('Failed to define rewarded ad slot');
          return;
        }

        slot.addService(googletag.pubads());

        if (!window._gptServicesEnabled) {
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
          window._gptServicesEnabled = true;
        }

        googletag.pubads().addEventListener('slotRenderEnded', (event) => {
          if (event.slot === slot && !event.isEmpty) {
            console.log('Rewarded ad rendered');
          } else if (event.isEmpty) {
            console.warn('No rewarded ad available');
          }
        });

        googletag.pubads().addEventListener('rewardedSlotReady', (event) => {
          console.log('Rewarded ad ready');
          event.makeRewardedVisible();
        });

        googletag.pubads().addEventListener('rewardedSlotGranted', () => {
          console.log('User earned reward');
        });

        googletag.pubads().addEventListener('rewardedSlotClosed', () => {
          console.log('Rewarded ad closed');
          googletag.destroySlots([slot]);
        });

        googletag.display(slot);
      });
    };

    const timer = setTimeout(() => {
      console.log('Attempting to load rewarded ad...');
      loadGPT().then(initRewardedAd);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (window.googletag?.apiReady && slot) {
        window.googletag.destroySlots([slot]);
      }
    };
  }, [location.pathname, adUnitPath, delay]);

  return <div id="rewarded-ad-slot" style={{ display: 'none' }} />;
};

export default RewardedAd;
