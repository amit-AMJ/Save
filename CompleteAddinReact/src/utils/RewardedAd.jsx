import { useEffect } from 'react';

const RewardedAd = ({ adUnitPath, delay = 2000 }) => {
  useEffect(() => {
    const loadGPT = () => {
      if (!window.googletag) {
        const script = document.createElement('script');
        script.src = 'https://www.googletagservices.com/tag/js/gpt.js';
        script.async = true;
        script.onload = () => {
          window.googletag = window.googletag || {};
          window.googletag.cmd = window.googletag.cmd || [];
          initRewardedAd();
        };
        document.head.appendChild(script);
      } else {
        initRewardedAd();
      }
    };

    const initRewardedAd = () => {
      googletag.cmd.push(() => {
        if (!googletag.pubadsReady) {
          googletag.pubads().addEventListener('slotRenderEnded', (event) => {
            if (event.slot.getSlotElementId() === 'rewarded-ad-slot' && !event.isEmpty) {
              console.log('Rewarded ad loaded successfully');
            } else if (event.isEmpty) {
              console.warn('No rewarded ad available');
            }
          });
        }

        const rewardedSlot = googletag.defineOutOfPageSlot(
          adUnitPath,
          googletag.enums.OutOfPageFormat.REWARDED
        );

        if (!rewardedSlot) {
          console.error('Failed to define rewarded ad slot');
          return;
        }

        rewardedSlot.addService(googletag.pubads());
        googletag.enableServices();

        // Set up event listeners
        googletag.pubads().addEventListener('rewardedSlotReady', (evt) => {
          console.log('Rewarded ad ready to show');
          evt.makeRewardedVisible();
        });

        googletag.pubads().addEventListener('rewardedSlotGranted', () => {
          console.log('User earned reward');
        });

        googletag.pubads().addEventListener('rewardedSlotClosed', () => {
          console.log('Rewarded ad closed');
          googletag.destroySlots([rewardedSlot]);
        });

        googletag.display(rewardedSlot);
      });
    };

    const timer = setTimeout(() => {
      console.log('Attempting to load rewarded ad...');
      loadGPT();
    }, delay);

    return () => {
      clearTimeout(timer);
      if (window.googletag) {
        googletag.cmd.push(() => {
          googletag.destroySlots();
        });
      }
    };
  }, [adUnitPath, delay]);

  return <div id="rewarded-ad-slot" style={{ display: 'none' }}></div>;
};

export default RewardedAd;



