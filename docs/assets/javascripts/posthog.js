// PostHog Analytics - Cookie-free tracking
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

// Initialize PostHog (same project as vmalyi.com for unified funnel tracking)
posthog.init('phc_8vaqqy1HdH46zgpioDjVq1rQb0yHaBGXMXOYKA16XsM', {
  api_host: 'https://eu.i.posthog.com',
  cookieless_mode: 'always',
  person_profiles: 'identified_only',
  autocapture: false,
  capture_pageview: true,
  capture_pageleave: true
});

// Track key conversion actions
document.addEventListener('DOMContentLoaded', function() {

  // Track service section views (anchors like #services, #consulting, etc.)
  var serviceLinks = document.querySelectorAll('a[href^="#"]');
  serviceLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var section = this.getAttribute('href');
      posthog.capture('service_section_viewed', {
        section: section,
        link_text: this.innerText || this.textContent
      });
    });
  });

  // Track contact/booking button clicks
  var contactButtons = document.querySelectorAll('a[href*="mailto"], a[href*="calendly"], a[href*="cal.com"], button[type="submit"]');
  contactButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      posthog.capture('contact_initiated', {
        button_text: this.innerText || this.textContent,
        button_type: this.tagName.toLowerCase(),
        href: this.href || 'form_submit'
      });
    });
  });

  // Track external links (LinkedIn, case studies, etc.)
  var externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="practical-ai-leadership.com"])');
  externalLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      posthog.capture('external_link_clicked', {
        destination: this.href,
        link_text: this.innerText || this.textContent
      });
    });
  });

});
