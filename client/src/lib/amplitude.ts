import * as amplitude from '@amplitude/analytics-browser';

// Initialize Amplitude
const initAmplitude = () => {
  const apiKey = (window as any).__AMPLITUDE_API_KEY__;
  
  console.log('Amplitude API Key:', apiKey ? 'Found' : 'Missing');
  console.log('All window vars:', Object.keys(window).filter(k => k.startsWith('__')));
  
  if (apiKey) {
    amplitude.init(apiKey, undefined, {
      // Free tier optimizations
      logLevel: amplitude.Types.LogLevel.Debug, // Temporarily enable debug logs
      flushIntervalMillis: 30000, // Batch events every 30s
      flushQueueSize: 50, // Batch up to 50 events
      useBatch: true,
    });
    console.log('Amplitude initialized with key:', apiKey.substring(0, 8) + '...');
  } else {
    console.error('Amplitude API key not found! Check VITE_AMPLITUDE_API_KEY env var');
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