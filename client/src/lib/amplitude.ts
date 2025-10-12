import * as amplitude from '@amplitude/analytics-browser';

// Initialize Amplitude
const initAmplitude = () => {
  // Try build-time variable first, then runtime
  const buildTimeKey = (window as any).__AMPLITUDE_API_KEY__;
  const runtimeKey = import.meta.env.VITE_AMPLITUDE_API_KEY;
  const apiKey = buildTimeKey || runtimeKey;

  if (apiKey) {
    amplitude.init(apiKey, {
      defaultTracking: true,
      logLevel: amplitude.Types.LogLevel.Warn,
      flushIntervalMillis: 30000,
      flushQueueSize: 50,
      useBatch: true,
      serverUrl: 'https://api2.amplitude.com/batch',
    });
  } else {
    // Silently skip if no key is provided in development
    if (import.meta.env.MODE !== 'production') {
      console.warn('Amplitude disabled: VITE_AMPLITUDE_API_KEY not set.');
    }
  }
};

// Track page views
export const trackPageView = (pageName: string) => {
  amplitude.track('Page View', {
    page: pageName,
    timestamp: Date.now(),
  });
};

// Track custom events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  amplitude.track(eventName, properties);
};

// Track user interactions
export const trackClick = (element: string, location?: string) => {
  amplitude.track('Click', {
    element,
    location,
  });
};

// Initialize on import
initAmplitude();

export default amplitude;
