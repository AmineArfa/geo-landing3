// Analytics event tracking
export type AnalyticsEvent = 
  | 'hero_viewed'
  | 'hero_scroll_past'
  | 'hero_submit'
  | 'loading_started'
  | 'result_shown'
  | 'result_scrolled'
  | 'cta_viewed'
  | 'cta_clicked'
  | 'retry_clicked'
  | 'exit_intent_shown'
  | 'email_captured'
  | 'credentials_submitted';

export interface AnalyticsProperties {
  [key: string]: string | number | boolean;
}

/**
 * Track analytics events
 * Currently logs to console for development
 * Structured for easy integration with GA4, Mixpanel, etc.
 */
export function trackEvent(event: AnalyticsEvent, properties?: AnalyticsProperties) {
  if (import.meta.env.DEV) {
    console.log('[Analytics]', event, properties || {});
  }
  
  // Future: Integrate with GA4, Mixpanel, etc.
  // Example:
  // if (window.gtag) {
  //   window.gtag('event', event, properties);
  // }
}

/**
 * Track page view
 */
export function trackPageView(path: string = window.location.pathname) {
  trackEvent('hero_viewed', { path });
}

/**
 * Track funnel progression
 */
export function trackFunnelStep(step: string, metadata?: AnalyticsProperties) {
  trackEvent('hero_viewed', { step, ...metadata });
}

