let gptScriptPromise;

export const loadGPT = () => {
  if (typeof window === 'undefined') return Promise.resolve();

  if (window.googletag?.apiReady) return Promise.resolve();

  if (gptScriptPromise) return gptScriptPromise;

  gptScriptPromise = new Promise((resolve, reject) => {
    window.googletag = window.googletag || { cmd: [] };

    const existingScript = document.querySelector(
      'script[src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"]'
    );

    if (existingScript) {
      if (window.googletag.apiReady) {
        resolve();
      } else {
        existingScript.addEventListener('load', () => resolve());
        existingScript.addEventListener('error', reject);
      }
    } else {
      const script = document.createElement('script');
      script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = reject;
      document.head.appendChild(script);
    }
  });

  return gptScriptPromise;
};
